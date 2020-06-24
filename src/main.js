import Vue from 'vue'
import App from './App.vue'

import home from  './components/home'
import config from './components/config'
import introduce from "@/components/introduce";

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.config.productionTip = false

Vue.use(ViewUI);
Vue.use(VueMaterial)
Vue.use(VueRouter)
Vue.use(ElementUI);

Vue.config.productionTip = false
const router = new VueRouter({
  routes: [
    {path: '/', component:home},
    {path:'/config',component: config},
    {path:'/introduce',component: introduce}
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
