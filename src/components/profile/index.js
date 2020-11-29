import Vue from 'vue';
import {mapGetters, mapMutations, mapState} from "vuex";
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
    name: "profile",
    components: {
        VuePhoneNumberInput,
    },
    data() {
        return {
            countries,
            events: [],
            otherEventsOfUser: [],
            searchResults: [],
            currentEvent: {},
            offset: 1,
            eventsTotalCount: 1,
            limit: 6,
            profile: {},
            drawer: false,
            filterDrawer: false,
            dateMenu: false,
            dateMenu1: false,
            timeMenu: false,
            mapDialog: false,
            infoDialog: false,
            deleteProfileDialog: false,
            deleteEventDialog: false,
            passwordDialog: false,
            showPass: false,
            snackbar: false,
            snackbarText: '',
            snackbarColor: '',
            currentPass: '',
            newPass: '',
            confNewPass: '',
            newEvent: {
                userId: 0,
                startDate: '',
                endDate: '',
                startTime: '',
                endTime: '',
                title: '',
                categoryId: '',
                description: '',
                phoneNumber: '',
                locationLt: 0,
                locationLg: 0,
                image: {}
            },
            marker: {
                position: {}
            },
            markerIcon: {
                url: require('../../static/images/icons/location-pink.png'),
                scaledSize: { width: 20, height: 30 }
            },
            filters: {
                categoryId: 0,
                country: '',
                city: '',
                date: ''
            },
            rules: {
                required: value => !!value || 'Required.',
                passwordCounter: value => value.length <= 20 || 'Max 20 characters',
                email: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return pattern.test(value) || 'Invalid e-mail.';
                },
            },
        }
    },
    mounted() {
        this.marker = {
            position: this.userPosition
        };

        this.getEvents();
        this.newEvent.locationLt = this.userPosition.lat;
        this.newEvent.locationLg = this.userPosition.lng;
        this.profile = this.user;
    },
    computed: {
        ...mapState(['categories', 'monthNames']),
        ...mapGetters(['userPosition', 'user']),
    },
    methods: {
        ...mapMutations(['logout', 'setUser', 'setEventPosition']),
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
                this.newEvent.locationLt = this.marker.position.lat;
                this.newEvent.locationLg = this.marker.position.lng;
            }
        },
        createEvent() {
            let fd= new FormData();
            this.newEvent.userId = this.user.id;
            for(let key in this.newEvent) {
                fd.append(key, this.newEvent[key]);
            }

            Vue.$http.post('/addEvent', fd, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(res => {
                    if(res.status === 200) {
                        this.snackbarText = 'Your event was successfully created!';
                        this.snackbarColor = 'success';
                        this.snackbar = true;
                    }
                })
                .catch(err => {
                    this.snackbarText = err.msg;
                    this.snackbarColor = 'error';
                    this.snackbar = true;
                });
        },
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
                let category = this.filters.categoryId ? `&categoryId=${this.filters.categoryId}` : '';
                let country = this.filters.country ? `&country=${this.filters.country}` : '';
                let city = this.filters.city ? `&city=${this.filters.city}` : '';
                let date = this.filters.date ? `&startDate=${this.filters.date}` : '';

                let filters = category + country + city + date;

                Vue.$http.get(`/searchEvents?userId=${this.user.id}&offset=${this.offset}&limit=${this.limit}${filters}`)
                    .then(res => {
                        this.events = res.data.data;
                        this.eventsTotalCount = Math.ceil(res.data.totalCount / this.limit);
                    })
                    .catch(err => {
                        console.log(err);
                    });
            }
        },
        uploadEventImage(e) {
            this.newEvent.image = e;
        },
        uploadProfileImage(e) {
            this.profile.image = e;
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
        },
        deleteEvent() {
            Vue.$http.get(`/removeEvent?eventId=${this.currentEvent.id}`)
                .then(() => {
                    this.snackbarText = 'Event was successfully deleted!';
                    this.snackbarColor = 'success';
                    this.snackbar = true;
                    this.getEvents();
                })
                .catch(err => {
                    console.log(err);
                    this.snackbarText = 'Something went wrong!';
                    this.snackbarColor = 'error';
                    this.snackbar = true;
                });
        },
        deleteProfile() {
            Vue.$http.get('/removeProfile')
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                });
            this.logout();
        },
        editProfile() {
            let fd= new FormData();
            for(let key in this.profile) {
                fd.append(key, this.profile[key]);
            }

            Vue.$http.post('/editProfile', fd, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(res => {
                    if(res.status === 200) {
                        this.snackbarText = 'Your profile was successfully updated!';
                        this.snackbarColor = 'success';
                        this.snackbar = true;
                        this.setUser(res.data.user);
                    }
                })
                .catch(err => {
                    this.snackbarText = err.msg;
                    this.snackbarColor = 'error';
                    this.snackbar = true;
                });
        },
        changePassword() {
            if(this.newPass != this.confNewPass) {
                this.snackbarText = 'Passwords doesn\'t match';
                this.snackbarColor = 'error';
                this.snackbar = true;
            } else {
                Vue.$http.post('/changePassword', {oldPassword: this.currentPass, newPassword: this.newPass})
                    .then(res => {
                        if(res.status === 200) {
                            this.snackbarText = 'Your password was successfully changed!';
                            this.snackbarColor = 'success';
                            this.snackbar = true;
                        }
                    })
                    .catch((err) => {
                        this.snackbarText = err.msg;
                        this.snackbarColor = 'error';
                        this.snackbar = true;
                    });
            }
        }
    }
}