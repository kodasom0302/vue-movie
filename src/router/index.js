import { createRouter, createWebHistory } from 'vue-router'
import movieListView from '../views/movieListView.vue'

const routes = [
  {
    path: '/movie/list',
    name: 'movieListView',
    component: movieListView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
