import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/style/iconfont/iconfont.scss'
import '@/assets/style/tailwind/tailwind.css'
import '@/assets/style/tailwind/preflight.css'
import 'virtual:svg-icons-register'
import router from '@/router/'
const pinia = createPinia()
const app = createApp(App)
app.use(ElementPlus).use(router).use(pinia)
app.mount('#app')
