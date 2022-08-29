import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/style/iconfont/iconfont.scss';
import '@/assets/style/tailwind/tailwind.css'
import '@/assets/style/tailwind/preflight.css'
import router from '@/router/'

const app = createApp(App);
app.use(ElementPlus).use(router);
app.mount('#app')
