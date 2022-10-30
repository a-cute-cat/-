import { createApp } from 'vue'
import App from './App.vue'
import  'normalize.css'
import  '@/assets/styles/common.less'
import router from '@/router/index'
import {createPinia} from 'pinia'
import XtxUI from '@/components'

const pinia = createPinia()

const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(XtxUI)
app.mount('#app')
