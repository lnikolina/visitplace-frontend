import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomeView.vue'
import store from '@/store.js'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
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

router.beforeEach((to,from,next) => {
  console.log('Stara ruta', from.name, '-->', to.name, ' korisnik', store.currentUser);

  const noUser = store.currentUser === null;

  if(noUser && to.meta.needsUser){
    next('Login');
  }else{
    next();
  }
});


export default router;