import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Croppa from 'vue-croppa';
import 'vue-croppa/dist/vue-croppa.css';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.config.productionTip = false
Vue.use(Croppa)

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
