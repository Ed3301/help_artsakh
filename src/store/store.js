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
        monthNames: ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ],
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