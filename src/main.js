import Vue from "vue";
import App from "./App.vue";
Vue.config.productionTip = false;
import router from "./router/router.js";
import store from "./store/store.js";
import "vant/lib/index.css";
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
