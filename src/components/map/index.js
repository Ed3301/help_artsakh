import {mapGetters, mapState} from "vuex";
import $ from 'jquery';
import Vue from "vue";

export default {
    name: "maps",
    data() {
      return {
          events: [],
          currentEvent: {},
          currentUser: {}
      }
    },
    mounted() {
        this.getEvents();
    },
    computed: {
        ...mapState(['monthNames', 'categories', 'selectedEventPosition']),
        ...mapGetters(['userPosition']),
    },
    methods: {
        showData(e, event) {
            Vue.$http.get(`/getProfile?userId=${event.userId}`)
                .then(res => {
                    this.currentUser = res.data.user;
                })
                .catch(err => {
                    console.log(err);
                });
            this.currentEvent = event;
            $('.square').show();
            $('#tooltip').show();
            $('.square').css({left: e.nb.pageX - 20, top: e.nb.pageY + 20 });
            $('#tooltip').css({left: 20, top: e.nb.pageY + 40});
        },
        hideData() {
            this.currentEvent = {};
            $('.square').hide();
            $('#tooltip').hide();
        },
        getEvents() {
            Vue.$http.get(`/searchEvents?limit=100`)
                .then(res => {
                    this.events = res.data.data;
                })
                .catch(err => {
                    console.log(err);
                });
        },
        setUserImg(img) {
            if(img) {
                return process.env.VUE_APP_API_URL + '/storage/profileImages/' + img;
            } else {
                return process.env.VUE_APP_API_URL + '/storage/profileImages/user.png';
            }
        },
        markerIcon(event) {
            let lat = this.selectedEventPosition.lat;
            if(lat) {
                return {
                    url: lat == event.locationLt ? require('../../static/images/icons/location-black.png') : require('../../static/images/icons/location-pink.png'),
                    scaledSize: { width: 20, height: 30 }
                };
            } else {
                return {
                    url: require('../../static/images/icons/location-pink.png'),
                    scaledSize: { width: 20, height: 30 }
                };
            }
        },
    }
}