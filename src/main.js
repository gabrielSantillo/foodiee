import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vueScrollReveal from 'vue-scroll-reveal'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(vueScrollReveal, {
  class: 'v-scroll-reveal',
  duration: 1000,
  scale: 1,
  distance: '20px'
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
