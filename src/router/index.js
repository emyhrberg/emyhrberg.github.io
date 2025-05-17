import { createRouter, createWebHistory } from 'vue-router';
import About from '../components/pages/About.vue';
import Contact from '../components/pages/Contact.vue';
import Home from '../components/pages/Home.vue';
import Tools from '../components/pages/Tools.vue';


export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', alias: '/home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/tools', name: 'tools', component: Tools },
    { path: '/contact', name: 'contact', component: Contact },
  ],
});
