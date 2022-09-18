import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Croppa from 'vue-croppa';
import 'vue-croppa/dist/vue-croppa.css';
import store from '@/store';

Vue.use(Croppa);
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      needsUser: true
    }
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/SignupView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => { //ova ce se ruta pozvati prije promijene svake rute
  console.log("Stara ruta", from.name, "Nova ruta", to.name, "korisnik", store.currentUser)

  next();
});

export default router
