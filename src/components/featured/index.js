import Vue from "vue";
import {mapMutations, mapState} from "vuex";
import countries from "../../static/countries";

export default {
    name: "featured",
    data() {
        return {
            countries,
            filterDrawer: false,
            eventDrawer: false,
            dateMenu: false,
            events: [],
            companies: [],
            otherEventsOfUser: [],
            searchResults: [],
            currentEvent: {},
            offset: 1,
            eventsTotalCount: 1,
            limit: 6,
            filters: {
                categoryId: 0,
                country: '',
                city: '',
                date: ''
            }
        }
    },
    mounted() {
      this.getEvents();
      this.getCompanies();
    },
    computed: {
      ...mapState(['monthNames', 'categories'])
    },
    methods: {
        ...mapMutations(['setEventPosition']),
        getEvents(userId = null) {
            if(userId) {
                Vue.$http.get(`/searchEvents?limit=10&userId=${userId}`)
                    .then(res => {
                        this.otherEventsOfUser = res.data.data;
                    })
                    .catch(err => {
                        console.log(err);
                    });
            } else {
                let category = this.filters.categoryId ? `&categoryId=${this.filters.categoryId}` : '';
                let country = this.filters.country ? `&country=${this.filters.country}` : '';
                let city = this.filters.city ? `&city=${this.filters.city}` : '';
                let date = this.filters.date ? `&startDate=${this.filters.date}` : '';
                let filters = category + country + city + date;

                Vue.$http.get(`/searchEvents?offset=${this.offset}&limit=${this.limit}${filters}`)
                    .then(res => {
                        this.events = res.data.data;
                        this.eventsTotalCount = Math.ceil(res.data.totalCount / this.limit);
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
        },
        getCompanies() {
            Vue.$http.get(`/getPopularCompanies`)
                .then(res => {
                    this.companies = res.data.data;
                })
                .catch(err => {
                    console.log(err);
                });
        },
        setEventImg(event) {
            if(event.img) {
                return process.env.VUE_APP_API_URL + '/storage/eventImages/' + event.img;
            } else {
                return process.env.VUE_APP_API_URL + '/storage/eventImages/event.jpg';
            }
        },
        setUserImg(img) {
            if(img) {
                return process.env.VUE_APP_API_URL + '/storage/profileImages/' + img;
            } else {
                return process.env.VUE_APP_API_URL + '/storage/profileImages/user.png';
            }
        },
        showEvent(event) {
            this.currentEvent = event;
            this.eventDrawer = !this.eventDrawer;
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