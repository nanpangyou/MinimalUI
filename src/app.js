import Vue from "vue";
import "./css/main";
import Mbutton from "./component/button/button";
import Micon from "./component/icon/icon";

Vue.component("m-button", Mbutton);
Vue.component("m-icon", Micon);

let app = new Vue({
  el: "#app",
  data: {
    loading1: true,
    loading2: true,
    loading3: true
  }
});
