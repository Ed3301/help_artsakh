import Vue from 'vue';
import App from './App.vue';
import vuetify from '@/plugins/vuetify';
import router from './routes';
import store from './store/store';
import axios from 'axios';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;

let headers = store.state.token ? {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${store.state.token}`,
      'apiToken': store.state.token,
      'userId': store.state.user.id,
    } :
    {
      'Content-Type': 'application/json',
    };

Vue.$http = axios.create({
  baseURL: process.env.VUE_APP_API_URL || 'https://secure-stream-70624.herokuapp.com/api',
  headers
});

new Vue({
  render: h => h(App),
  vuetify,
  router,
  store
}).$mount('#app');