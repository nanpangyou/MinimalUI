import Vue from "vue";
import "./css/main";
import MButton from "./component/button/button";
import MIcon from "./component/icon/icon";
import MButtonGroup from "./component/button-group/button-group";
import MInput from "./component/input/input";
import MRow from "./component/grid/row";
import MCol from "./component/grid/col";
import MLayout from "./component/layout/layout";
import MHeader from "./component/layout/header";
import MContent from "./component/layout/content";
import MSider from "./component/layout/sider";
import MFooter from "./component/layout/footer";
import MToast from "./component/toast/toast";
import ToastPlugin from "./component/toast/toastPlugin";

Vue.component("m-button", MButton);
Vue.component("m-icon", MIcon);
Vue.component("m-button-group", MButtonGroup);
Vue.component("m-input", MInput);
Vue.component("m-row", MRow);
Vue.component("m-col", MCol);
Vue.component("m-layout", MLayout);
Vue.component("m-header", MHeader);
Vue.component("m-content", MContent);
Vue.component("m-sider", MSider);
Vue.component("m-footer", MFooter);
Vue.use(ToastPlugin);

let app = new Vue({
  el: "#app",
  data: {
    loading1: false,
    loading2: false,
    loading3: false,
    message: "value2"
  },
  mounted() {
    this.showToast();
  },
  methods: {
    showToast() {
      this.$toast("我是 toast");
    }
  }
});
