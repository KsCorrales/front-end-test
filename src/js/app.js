import "../sass/app.scss";

import Vue from 'vue';
import App from './components/app.vue';
import RulingBox from './components/rulingBox.vue';
import NewestRuling from './components/newestRuling.vue';

Vue.component("ruling-box", RulingBox);
Vue.component("newest-ruling", NewestRuling);

// For event management
window.event = new Vue;

var app = new Vue({
    el: '#app',
    render: h => h(App),
})