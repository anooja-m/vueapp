import Vue from "vue";
import Router from "vue-router";
import signup from '../views/signup.vue'
import foodShow from '../views/foodShow.vue'
import login from '../views/login.vue'
import Home from '../views/Home.vue'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/user/:home',
      name: 'home',
      component: Home
    },
    {
      path: '/sign',
      name: 'sign-up',
      component: signup
    },
    {
      path: '/food/show',
      name: 'food-show',
      component: foodShow
    },
    {
      path: '/food/login',
      name: 'login',
      component: login
      
    }
    
    
  ]
})



