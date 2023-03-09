import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FavoriteJokesView from '../views/FavoriteJokesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/jokes',
      name: 'jokes',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/JokeView.vue')
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: FavoriteJokesView
    },
  ]
})

export default router
