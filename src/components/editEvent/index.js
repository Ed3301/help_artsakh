import Vue from 'vue';
import {mapGetters, mapState} from "vuex";
import VuePhoneNumberInput from 'vue-phone-number-input';
import 'vue-phone-number-input/dist/vue-phone-number-input.css';
import * as VueGoogleMaps from 'vue2-google-maps';
import countries from "../../static/countries";

Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyBjKtMl2tLbMtcKYEdqxLIs1CBURBKICXs',
        libraries: 'places',
    },
});
Vue.component('vue-phone-number-input', VuePhoneNumberInput);

export default {
    name: "editEvent",
    components: {
        VuePhoneNumberInput,
    },
    data() {
        return {
            countries,
            marker: {
                position: {}
            },
            markerIcon: {
                url: require('../../static/images/icons/location-pink.png'),
                scaledSize: { width: 20, height: 30 }
            },
            dateMenu: false,
            dateMenu1: false,
            timeMenu: false,
            mapDialog: false,
            deleteDialog: false,
            snackbar: false,
            snackbarColor: '',
            snackbarText: '',
            event: {}
        }
    },
    computed: {
        ...mapState(['categories']),
        ...mapGetters(['userPosition']),
    },
    mounted() {
        this.marker = {
            position: this.userPosition
        };

        Vue.$http.get(`/searchEvents?id=${this.$route.params.id}`)
            .then(res => {
                this.event = res.data.data[0];
            })
            .catch(err => {
                console.log(err);
            });
    },
    methods: {
        mark(position) {
            this.marker = {
                position: {
                    lat: position.latLng.lat(),
                    lng: position.latLng.lng()
                }
            };
        },
        acceptLocation() {
            this.mapDialog = false;
            if(this.marker.position.lat) {
                this.event.locationLt = this.marker.position.lat;
                this.event.locationLg = this.marker.position.lng;
            }
        },
        setEventImg(event) {
            if(event.img) {
                return process.env.VUE_APP_API_URL + '/storage/eventImages/' + event.img;
            } else {
                return process.env.VUE_APP_API_URL + '/storage/eventImages/event.jpg';
            }
        },
        uploadEventImage(e) {
            this.event.image = e;
        },
        updateEvent() {
            let fd= new FormData();
            for(let key in this.event) {
                fd.append(key, this.event[key]);
            }

            Vue.$http.post(`/editEvent`, fd, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(() => {
                    this.snackbarColor = 'success';
                    this.snackbarText = 'Event was successfully changed';
                    this.snackbar = true;
                })
                .catch(err => {
                    console.log(err);
                    this.snackbarColor = 'error';
                    this.snackbarText = err.msg;
                    this.snackbar = true;
                });
        },
        deleteEvent() {
            Vue.$http.get(`/removeEvent?eventId=${this.event.id}`)
                .then(() => {
                    this.snackbarText = 'Event was successfully deleted!';
                    this.snackbarColor = 'success';
                    this.snackbar = true;
                })
                .catch(err => {
                    console.log(err);
                    this.snackbarText = 'Something went wrong!';
                    this.snackbarColor = 'error';
                    this.snackbar = true;
                });
            this.deleteDialog = false;
        },
    }
}