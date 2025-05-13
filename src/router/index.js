import { createRouter, createWebHistory } from 'vue-router';
import About from '../components/About.vue';
import Archive from '../components/Archive.vue';
import Blog from '../components/Blog.vue';
import Contact from '../components/Contact.vue';
import Home from '../components/Home.vue';


export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', alias: '/home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/blog', name: 'blog', component: Blog },
    { path: '/archive', name: 'archive', component: Archive },
    { path: '/contact', name: 'contact', component: Contact },
  ],
});
