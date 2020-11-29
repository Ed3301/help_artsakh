import {mapMutations, mapState} from "vuex";
// import $ from "jquery";
import Vue from "vue";

export default {
    name: "calendar",
    data() {
        return {
            drawer: false,
            currentEvent: {},
            currentCategory: {},
            events: [],
            otherEventsOfUser: [],
            activeCategories: [],
            searchResults: [],
            offset: 1,
            limit: 9,
            eventsTotalCount: 0,
            categoryIds: {
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
            }
        }
    },
    mounted() {
        this.getEvents();
    },
    computed: {
        ...mapState(['selectedDate', 'categories', 'monthNames']),
        picker: {
            get() {
                return this.selectedDate;
            },
            set(newVal) {
                this.setSelectedDate(newVal);
                this.getEvents();
            }
        }
    },
    methods: {
        ...mapMutations(['setSelectedDate', 'setEventPosition']),
        getEvents(userId = null) {
            if(userId) {
                Vue.$http.get(`/searchEvents?userId=${userId}&limit=10`)
                    .then(res => {
                        this.otherEventsOfUser = res.data.data;
                    })
                    .catch(err => {
                        console.log(err);
                    });
            } else {
                let categoryIds = [];
                for(let key in this.categoryIds) {
                    this.categoryIds[key] ? categoryIds.push(key) : '';
                }

                let user = userId ? `&userId=${userId}` : '';
                Vue.$http.get(`/searchEvents?offset=${this.offset}&limit=${this.limit}&startDate=${this.selectedDate}${user}`, {
                    params: {
                        categoryIds
                    },
                })
                    .then(res => {
                        this.events = res.data.data;
                        this.eventsTotalCount = Math.ceil(res.data.totalCount / this.limit);
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
        },
        setEventImg(event) {
            if(event.img) {
                return require('../../../../events-api/public/storage/eventImages/' + event.img);
            } else {
                return require('../../../../events-api/public/storage/eventImages/event.jpg');
            }
        },
        setUserImg(img) {
            if(img) {
                return require('../../../../events-api/public/storage/profileImages/' + img);
            } else {
                return require('../../../../events-api/public/storage/profileImages/user.png');
            }
        },
        showEvent(event) {
            this.currentEvent = event;
            this.drawer = !this.drawer;
            this.getEvents(event.userId);
        },
        searchEvents(event) {
            if(event.id) {
                this.showEvent(event);
            } else {
                Vue.$http.get(`/searchEvents?limit=20&title=${event}`)
                    .then(res => {
                        this.searchResults = res.data.data;
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
        }
    }
}