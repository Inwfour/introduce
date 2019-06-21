/* eslint-disable no-unused-vars */
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
// eslint-disable-next-line no-unused-vars
import VueScrollReveal from 'vue-scroll-reveal'
import Vuetify from 'vuetify'
import VueScrollProgressBar from './components/VueScrollProgressBar'
// eslint-disable-next-line no-unused-vars
import AOS from 'aos'
import '../node_modules/aos/dist/aos.css'
// eslint-disable-next-line no-unused-vars
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// eslint-disable-next-line no-unused-vars
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faLine, faGithub } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import BackToTop from 'vue-backtotop'
import VueSweetalert2 from 'vue-sweetalert2'

Vue.use(VueSweetalert2)
Vue.use(BackToTop)
library.add(faFacebook)
library.add(faTwitter)
library.add(faLine)
library.add(faGithub)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('vue-scroll-progress-bar', VueScrollProgressBar)
Vue.use(Vuetify)
Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration: 800,
  scale: 1,
  distance: '10px',
  mobile: false
})

Vue.config.productionTip = false

new Vue({
  created () {
    AOS.init({
      duration: 1200
    })
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
