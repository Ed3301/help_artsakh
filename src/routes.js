import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store/store';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: require('./components/blog/blog').default, meta: { requiresAuth: false }},
    { path: '/calendar', component: require('./components/calendar/calendar').default, meta: { requiresAuth: false }},
    { path: '/profile', component: require('./components/profile/profile').default, meta: { requiresAuth: true }},
    { path: '/event/:id/edit', component: require('./components/editEvent/editEvent').default, meta: { requiresAuth: true }},
    { path: '/map', component: require('./components/map/map').default, meta: { requiresAuth: false }},
    { path: '/featured', component: require('./components/featured/featured').default, meta: { requiresAuth: false }},
    { path: '*', redirect: '/'}
];

const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters.isLoggedIn) {
            next({
                path: '/',
            })
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;