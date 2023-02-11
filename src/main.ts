import * as Vue from 'vue'
import { createPinia } from 'pinia';
import piniaPersist from 'pinia-plugin-persist';
import App from './App.vue';
import router from './router';
import { Router } from 'vue-router';
import './styles/main.css';
import Chat from 'vue3-beautiful-chat'

const app = Vue.createApp(App)

// i18n instance
/* const i18n = createI18n({
  locale: 'es',
  legacy: false,
  fallbackLocale: 'en',
  messages: messages,
});

app.use(i18n); */

// create Pinia and attach router in order to use it within setup stores
declare module 'pinia' {
  export interface Pinia {
    router: Router;
  }
}
const pinia = createPinia();
pinia.router = router;
app.use(pinia);

// Pinia persist plugin
pinia.use(piniaPersist);

// Router
app.use(router);

// Beautiful-chat
app.use(Chat)

app.mount('#app');
