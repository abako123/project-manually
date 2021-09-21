import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import mixins from './mixins'
import Swal from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import i18nPlugin from './plugins/i18n'
import 'animate.css'

const i18nStrings = {
  en: {
    hi: 'Hello!',
    save: 'Save'
  },
  ko: {
    hi: '안녕하세요!',
    save: '저장'
  }
}

const app = createApp(App)
app.use(router)
app.use(store)
app.use(Swal)
app.use(i18nPlugin, i18nStrings)
app.directive('focus', {
  mounted (el) {
    el.focus()
  }
})
app.mixin(mixins)
app.mount('#app')

window.Kakao.init('17cb5e686f6ca53c771e1cca3ef9cd3d') // 발급 받은 앱키
