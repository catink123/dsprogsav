import Vue from 'vue'
import App from './App.vue'
import router from './router'

document.title = "Dark Souls Achievement Progress Saver";

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
