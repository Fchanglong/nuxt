import Vue from 'vue'
import App from './App.vue'
// import router from './router'
// import store from './store'
import lazyload from 'vue-lazyload';

import createRouter from "./router";
import createStore from "./store";
// import 'font-awesome/css/font-awesome.min.css'//font-awesome
// var jsdom = require("jsdom"); 
// $ = require("jquery")(jsdom.jsdom().createWindow()); 
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faHatWizard,faCartShopping,faChevronDown } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// library.add(faHatWizard,faCartShopping,faChevronDown)
// Vue.component('font-awesome-icon', FontAwesomeIcon)

if (typeof window !== 'undefined') {
  // 在这里使用 jQuery
  require ('bootstrap/dist/js/bootstrap.min.js') //引用bootstrap的js
}


import 'bootstrap/dist/css/bootstrap.css' //引用bootstrap的样式 


Vue.config.productionTip = false



Vue.use(lazyload, {
  // preLoad: 1.3,
  error: require("./assets/erro.jpg"),
  loading: require("./assets/log.gif"),
  // attempt: 1
  try:2
})


export default function createApp() {
  const router = createRouter();
  const store = createStore();
  const app = new Vue({
    router,
    store,
    render: h => h(App),
  });
  return { app, router,store };
}

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')
