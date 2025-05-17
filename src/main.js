import { createApp } from 'vue';
import App from './App.vue';
import ExternalLink from './components/ExternalLink.vue';
import router from './router';

const app = createApp(App);
app.use(router);
app.component('ExternalLink', ExternalLink)
app.mount('#app');

