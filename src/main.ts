﻿import Vue from "vue"

import './register-router-hooks'
import './register-components'
import app from './components/app.vue'


// import api from './api/dataSource/api/apiDataSource.plugin'
// Vue.use(api, ApiUrl);


import mainStore from './plugins/mainStore'
Vue.use(mainStore);

import Vue2TouchEvents from 'vue2-touch-events'
Vue.use(Vue2TouchEvents)

const moment = require('moment')
moment.locale('ru');
Vue.use(require('vue-moment'), {
    moment
});

// import { Component } from "vue-property-decorator";
// Component.registerHooks([
//     "beforeRouteEnter",
//     "beforeRouteLeave",
//     "beforeRouteUpdate",
// ])



import router from './router'

//console.log('start vue');


const v = new Vue({
    el: "#app",
    router: router,
    template: `<app/>`,
    components: { app }
});


//console.dir(Vue)