import Vue from "vue";
import Router from "vue-router";
import signup from '../views/signup.vue'
import foodShow from '../views/foodShow.vue'
import createOder from '../views/createOder.vue'
    

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'sign-up',
      component: signup
    },
    {
      path: '/food',
      name: 'food-show',
      component: foodShow
    },
    {
      path: '/food/order',
      name: 'create',
      component: createOder
      
    }
  ]
})



