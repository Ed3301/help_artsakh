import Vue from 'vue';
import $ from 'jquery';
import {mapMutations, mapState} from 'vuex';
import store from '../../store/store';

export default {
    name: "blog",
    data() {
        return {
            store,
            location: location,
            headerPictures: [
                { src: require('../../static/images/slide1.jpg') },
                { src: require('../../static/images/slide2.jpg') },
                { src: require('../../static/images/slide3.jpg') },
                { src: require('../../static/images/slide4.jpg') },
                { src: require('../../static/images/slide5.jpg') },
            ],
            events: [],
            otherEventsOfUser: [],
            currentEvent: {},
            currentCategory: {},
            picker: new Date().toISOString().substr(0, 10),
            drawer: false
        }
    },
    mounted() {
        $('.v-date-picker-table').css('height', '200px');
        this.getEvents();
    },
    computed: {
        ...mapState(['categories', 'monthNames'])
    },
    methods: {
        ...mapMutations(['setSelectedDate', 'setEventPosition']),
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
            this.drawer = !this.drawer;
            this.getEvents(null, event.userId);
        },
        selectCategory(category) {
            for(let c of this.categories) {
                $(`#category${c.name.replace(' ', '')}`).css({'color': 'black', 'backgroundColor': 'white'});
                c.currentIcon = c.iconBlack;
            }
            if(category.id === this.currentCategory.id) {
                category.currentIcon = category.iconBlack;
                this.currentCategory = {};
                $(`#category${category.name.replace(' ', '')}`).css({'color': 'black', 'backgroundColor': 'white'});
                this.getEvents();
            } else {
                this.currentCategory = category;
                category.currentIcon = category.iconWhite;
                $(`#category${category.name.replace(' ', '')}`).css({'color': 'white', 'backgroundColor': '#ea1e48'});
                this.getEvents(category.id);
            }
        },
        getEvents(categoryId = null, userId = null) {
            if(userId) {
                Vue.$http.get(`/searchEvents?userId=${userId}&limit=10`)
                    .then(res => {
                        this.otherEventsOfUser = res.data.data;
                    })
                    .catch(err => {
                        console.log(err);
                    });
            } else {
                let category = categoryId ? `&categoryId=${categoryId}` : '';
                Vue.$http.get(`/searchEvents?limit=10${category}`)
                    .then(res => {
                        this.events = res.data.data;
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
        },
    },
    watch: {
        picker(newVal) {
            this.setSelectedDate(newVal);
            this.$router.push('/calendar');
        }
    }
}