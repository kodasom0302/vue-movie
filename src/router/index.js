import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/main/MainView.vue'
import FindView from '@/views/find/FindView.vue'
import FoodStoreView from '@/views/foodstore/FoodStoreView.vue'
import TicketView from '@/views/ticket/TicketView.vue'
import PaymentCheckView from '@/views/payment/PaymentCheckView.vue'
import MoviePosterView from '@/views/ticket/MoviePosterView.vue'
import ChoosePointView from '@/views/point/ChoosePointView.vue'
import PlusPointView from '@/views/point/PlusPointView.vue'
import EndPointView from '@/views/point/EndPointView.vue'
import TestView from '@/views/ticket/TestView.vue'

const routes = [
  {
    path: '/',
    name: '/',
    component: MainView
  },
  {
    path: '/find/findform',
    name: '/find/findform',
    component: FindView
  },
  {
    path: '/foodstore/foodform',
    name: '/foodstore/foodform',
    component: FoodStoreView
  },
  {
    path: '/ticket/ticketform',
    name: '/ticket/ticketform',
    component: TicketView
  },
  
  {
    path: '/payment/paymentform',
    name: '/payment/paymentform',
    component: PaymentCheckView
  },
  {
    path: '/ticket/poster',
    name: '/ticket/poster',
    component: MoviePosterView
  },
  {
    path: '/point',
    name: '/point',
    component: ChoosePointView
  },
  {
    path: '/addpoint',
    name: '/addpoint',
    component: PlusPointView
  },
  {
    path: '/endpoint',
    name: '/endpoint',
    component: EndPointView
  },
  {
    path: '/test/test',
    name: '/test/test',
    component: TestView
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
