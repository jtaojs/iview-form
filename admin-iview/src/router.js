import Vue from 'vue'
import Router from 'vue-router'
import VueForm from './views/vue-form.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VueForm',
      component: VueForm
    }
  ]
})
