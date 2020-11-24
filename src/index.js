import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
var $ = require("jquery");

import './assets/scss/main.scss'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
	render: h => h(App),
}).$mount('#app')

$('document').ready(function() {});