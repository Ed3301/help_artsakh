import Vue from 'vue';
import { mapGetters, mapMutations } from 'vuex';
import $ from 'jquery';
import countries from '../../static/countries';
import store from "../../store/store";

export default {
    name: "navbar",
    data() {
        return {
            countries,
            store,
            showPass: false,
            keepLoggedIn: false,
            snackbar: false,
            email: '',
            password: '',
            rules: {
                required: value => !!value || 'Required.',
                passwordCounter: value => value.length <= 20 || 'Max 20 characters',
                email: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return pattern.test(value) || 'Invalid e-mail.';
                },
            },
            newUser: {
                userName: '',
                email: '',
                password: '',
                country: '',
                city: '',
                address: '',
                role: 1,
                photo: ''
            }
        }
    },
    mounted() {
      this.navStyle(this.path);
    },
    computed: {
        ...mapGetters(['isLoggedIn']),
        path() {
            return this.$route.path
        }
    },
    methods: {
        ...mapMutations(['setToken', 'setUser']),
        navStyle(path) {
          if(path !== '/') {
              $('nav#header').css({position: 'initial', backgroundImage: `url(${require("../../static/images/land.jpg")}`});
          } else {
              $('nav#header').css({position: 'absolute', backgroundImage: 'none'});
          }
      },
      register() {
          Vue.$http.post('/signUp', this.newUser)
              .then(res => {
                  console.log(res);
                  if(res.status === 200) {
                      this.snackbar = true;
                      this.store.state.registerModal = false;
                      this.store.state.loginModal = true;
                  }
              })
              .catch(err => {
                  console.log(err);
              })
      },
      login() {
          Vue.$http.post('/signIn', {login: this.email, password: this.password})
              .then(res => {
                  if(res.status === 200) {
                      this.setToken(res.data.user.apiToken);
                      this.setUser(res.data.user);
                      this.store.state.loginModal = false;
                      location.href = '/profile';
                  }
              })
              .catch(err => {
                  console.log(err);
              })
      }
    },
    watch: {
        path(newVal) {
            this.navStyle(newVal)
        }
    }
}