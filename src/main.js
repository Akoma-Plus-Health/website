import './assets/css/main.css'
import { createHead } from '@unhead/vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@fontsource/open-sans' // Defaults to weight 400.

const app = createApp(App)
const head = createHead()
app.use(router).use(head).mount('#app')
