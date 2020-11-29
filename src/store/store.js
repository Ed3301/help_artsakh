import Vuex from 'vuex';
import Vue from 'vue';
import router from '../routes';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: JSON.parse(localStorage.getItem('user')) || {},
        token: localStorage.getItem('auth_token') || null,
        selectedDate: new Date().toISOString().substr(0, 10),
        loginModal: false,
        registerModal: false,
        selectedEventPosition: {},
        categories: [
            {
                id: 1,
                name: 'Clothing',
                iconBlack: require('../static/images/icons/Clothing-black.png'),
                iconWhite: require('../static/images/icons/Clothing-white.png'),
                currentIcon: require('../static/images/icons/Clothing-black.png')
            },
            {
                id: 2,
                name: 'Restaurants',
                iconBlack: require('../static/images/icons/Restaurants-black.png'),
                iconWhite: require('../static/images/icons/Restaurants-white.png'),
                currentIcon: require('../static/images/icons/Restaurants-black.png')
            },
            {
                id: 3,
                name: 'Events',
                iconBlack: require('../static/images/icons/events-black.png'),
                iconWhite: require('../static/images/icons/events-white.png'),
                currentIcon: require('../static/images/icons/events-black.png')
            },
            {
                id: 4,
                name: 'Merchandise',
                iconBlack: require('../static/images/icons/Merchandise-black.png'),
                iconWhite: require('../static/images/icons/Merchandise-white.png'),
                currentIcon: require('../static/images/icons/Merchandise-black.png')
            },
            {
                id: 5,
                name: 'Armenian Non-Profits',
                iconBlack: require('../static/images/icons/Armenian-Non-Profits.png'),
                iconWhite: require('../static/images/icons/Armenian-Non-Profits-white.png'),
                currentIcon: require('../static/images/icons/Armenian-Non-Profits.png')
            },
        ],
        monthNames: ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ],
        events: [
            {
                address: 'Pushkin 6',
                country: 'Armenia',
                city: 'Yerevan',
                image: require('../static/images/cafe1.jpg'),
                title: 'Help Armenia',
                description: 'Help Armenia Help Armenia Help Armenia Help Armenia Help Armenia Help Armenia',
                date: new Date().toISOString().substr(0, 10),
                category: 'Donation',
                phoneNumber: '+123456789',
                location: {
                    lat: 40.35406877046384,
                    lng: 44.21045739453123
                }
            },
            {
                address: 'Pushkin 6',
                country: 'Armenia',
                city: 'Yerevan',
                image: require('../static/images/cafe2.jpeg'),
                title: 'Help Armenia',
                description: 'Help Armenia Help Armenia Help Armenia Help Armenia Help Armenia Help Armenia',
                date: new Date().toISOString().substr(0, 10),
                category: 'Donation',
                phoneNumber: '+123456789',
                location: {
                    lat: 40.61310772703784,
                    lng: 44.62244469921873
                }
            },
            {
                address: 'Pushkin 6',
                country: 'Armenia',
                city: 'Yerevan',
                image: require('../static/images/cafe3.jpeg'),
                title: 'Help Armenia',
                description: 'Help Armenia Help Armenia Help Armenia Help Armenia Help Armenia Help Armenia',
                date: new Date().toISOString().substr(0, 10),
                category: 'Donation',
                phoneNumber: '+123456789',
                location: {
                    lat: 39.892026137188324,
                    lng: 45.01795251171873
                }
            },
            {
                address: 'Pushkin 6',
                country: 'Armenia',
                city: 'Yerevan',
                image: require('../static/images/cafe1.jpg'),
                title: 'Help Armenia',
                description: 'Help Armenia Help Armenia Help Armenia Help Armenia Help Armenia Help Armenia',
                date: new Date().toISOString().substr(0, 10),
                category: 'Donation',
                phoneNumber: '+123456789',
                location: {
                    lat: 40.299627415178676,
                    lng: 44.96302087109373
                }
            },
            {
                address: 'Pushkin 6',
                country: 'Armenia',
                city: 'Yerevan',
                image: require('../static/images/cafe2.jpeg'),
                title: 'Help Armenia',
                description: 'Help Armenia Help Armenia Help Armenia Help Armenia Help Armenia Help Armenia',
                date: new Date().toISOString().substr(0, 10),
                category: 'Donation',
                phoneNumber: '+123456789',
                location: {
                    lat: 40.30381677064747,
                    lng: 43.85889489453123
                }
            },
        ],
    },

    getters: {
        user(state) {
            return state.user
        },
        isLoggedIn(state) {
            return state.token != null;
        },
        userPosition(state) {
            let position = {
                lat: 0,
                lng: 0
            };

            if(state.selectedEventPosition.lat) {
                position = state.selectedEventPosition;
            } else if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((location) => {
                    position.lat = location.coords.latitude;
                    position.lng = location.coords.longitude;
                });
            } else {
                alert('Geolocation is not supported by this browser.');
            }

            return position;
        }
    },

    mutations: {
        setSelectedDate(state, date) {
            state.selectedDate = date;
        },
        setCategories(state, data) {
            state.categories = data;
        },
        setToken(state, token) {
            state.token = token;
            localStorage.setItem('auth_token', token);
        },
        setUser(state, user) {
            state.user = user;
            localStorage.setItem('user', JSON.stringify(user));
        },
        logout(state) {
            state.token = null;
            state.user = {};
            localStorage.removeItem('auth_token');
            localStorage.removeItem('user');
            location.href = '/';
        },
        setEventPosition(state, position) {
            state.selectedEventPosition = position;
            router.push('/map');
        },
    },
});