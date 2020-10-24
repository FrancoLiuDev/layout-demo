import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import lineClamp from "vue-line-clamp";

Vue.use(lineClamp, {
  // plugin options
  importCss: true
});
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
