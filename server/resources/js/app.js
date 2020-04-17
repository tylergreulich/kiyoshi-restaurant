/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import App from './views/App';
import Home from './views/Home';
import Menu from './views/Menu';
import SingleMenu from './views/SingleMenu';
Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
});

Vue.component('app', require('./views/App.vue').default);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu,
    },
    {
      path: '/menu/:id',
      name: 'singleMenu',
      component: SingleMenu,
    },
  ],
});

const app = new Vue({
  el: '#app',
  components: { App },
  router,
  store,
});
