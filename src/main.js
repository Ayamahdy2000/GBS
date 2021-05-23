import Vue from "vue";
import {
  BootstrapVue,
  IconsPlugin
} from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import "popper.js";
import "@/fontawesome-free-5.9.0-web/css/all.css";
Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(Vuesax);
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");