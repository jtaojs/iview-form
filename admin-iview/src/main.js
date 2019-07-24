import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import iview from "iview";
import VCharts from "v-charts";
import "iview/dist/styles/iview.css";
import VueSlideBar from "vue-slide-bar";

Vue.use(iview);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
