import Toast from "./toast";
export default {
  install(Vue, options) {
    Vue.prototype.$toast = function(message) {
      // 动态创建vue实例 类似测试代码
      // 1. 引入`toast.vue`文件
      // 2. 使用`Vue.extend`创建构造函数
      // 3. `new`一个vue实例
      // 4. 设置相关的属性（比如slot，事件监听等）
      // 5. `mount`到内存中
      // 6. `append`到页面中
      let ToastConstructor = Vue.extend(Toast);
      let toast = new ToastConstructor();
      toast.$slots.default = [message];
      toast.$mount();
      document.body.appendChild(toast.$el);
    };
  }
};
