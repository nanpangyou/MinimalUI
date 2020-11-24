import Vue from 'vue'
import App from './App.vue'
import "./css/main.scss";

import ToastPlugin from "../src/components/toast/toastPlugin";

Vue.use(ToastPlugin);
// Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
