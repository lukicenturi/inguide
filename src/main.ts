import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.postcss'
import router from './router/router'
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'typeface-roboto-mono';
import './assets/main.css';

const head = createHead()
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(head)

app.mount('#app')
