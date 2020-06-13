import Vue from 'vue';
import './css/main';
import Mbutton from './component/button/button';

Vue.component("m-button", Mbutton)

let app = new Vue({
    el: '#app'
})