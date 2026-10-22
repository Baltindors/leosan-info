import { createRouter, createWebHistory } from 'vue-router'
import BlogIndexView from '../views/BlogIndexView.vue'
import BlogPostView from '../views/BlogPostView.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    { path: '/', name: 'profile', component: HomeView },
    { path: '/blog', name: 'blog', component: BlogIndexView },
    { path: '/blog/:slug', name: 'post', component: BlogPostView },
  ],
})

export default router
