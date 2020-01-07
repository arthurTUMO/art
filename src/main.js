import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
  load: {
    key: 'process.env.VUE_APP_GOOGLE_API_KEY',
    libraries: 'places' // necessary for places input
  }
})

new Vue({
  vuetify,
  router,
  axios,
  VueAxios,
  render: h => h(App)
}).$mount('#app')
