import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import UiButton from '@/components/ui/UiButton'
import VueCircle from 'vue2-circle-progress/src/index.vue'

Vue.component('UiButton', UiButton)
Vue.component('VueCircle', VueCircle)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
