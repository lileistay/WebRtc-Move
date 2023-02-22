import App from './App'

// #ifndef VUE3
import Vue from 'vue';
import Mixin from './polyfill/mixins.js';
import Utils from "./utils/until.js"
Vue.prototype.avatarUrl=null;
Vue.mixin(Mixin)
Vue.prototype.$Utils = Utils;
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif