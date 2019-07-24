import Vue from "vue";
import Router from "vue-router";
import VueForm from "./views/vue-form.vue";
import vcharts from "./views/vcharts.vue";
import test from "./views/test.vue";
import father from "./views/father.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "VueForm",
      component: VueForm
    },
    {
      path: "/chart",
      name: "vcharts",
      component: vcharts
    },
    {
      path: "/test",
      name: "test",
      component: test
    },
    {
      path: "/father",
      component: father
    }
  ]
});
