import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Croppa from 'vue-croppa';
import 'vue-croppa/dist/vue-croppa.css';

Vue.use(Croppa);
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/activities',
    name: 'activities',
    component: () => import(/* webpackChunkName: "about" */ '../views/ActivitiesView.vue')
  },
  {
    path: '/postimage',
    name: 'postimage',
    component: () => import(/* webpackChunkName: "about" */ '../views/PostImageView.vue')
  },
  {
    path: '/attractions',
    name: 'attractions',
    component: () => import(/* webpackChunkName: "about" */ '../views/attractionsView.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import(/* webpackChunkName: "about" */ '../views/SignupView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
