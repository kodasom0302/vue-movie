import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/main/MainView.vue'
import FindView from '@/views/find/FindView.vue'
import FoodStoreView from '@/views/foodstore/FoodStoreView.vue'
import TicketView from '@/views/ticket/TicketView.vue'
import PaymentCheck2View from '@/views/payment/PaymentCheck2View.vue'
import MoviePosterView from '@/views/ticket/MoviePosterView.vue'
import TestView from '@/views/ticket/TestView.vue'
import SlideView from '@/views/slide/SlideView.vue'
import ChoosePointView from '@/views/ticket/ChoosePointView.vue'
import EndPointView from '@/views/ticket/EndPointView.vue'
import PlusPointView from '@/views/ticket/PlusPointView.vue'
import PointUse from '@/views/ticket/PointUse.vue'
import ChoosePoint2View from '@/views/foodstore/ChoosePoint2View.vue'
import EndPoint2View from '@/views/foodstore/EndPoint2View.vue'
import PlusPoint2View from '@/views/foodstore/PlusPoint2View.vue'
import PointUse2 from '@/views/foodstore/PointUse2.vue'
import AgeGuide12 from '@/views/AgeGuide/AgeGuide12.vue'
import AgeGuide15 from '@/views/AgeGuide/AgeGuide15.vue'
import AgeGuide18 from '@/views/AgeGuide/AgeGuide18.vue'

const routes = [
  {
    path: '/',
    name: '/',
    component: SlideView
  },
  {
    path: '/main/main',
    name: '/main/main',
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
    name: 'PaymentCheckView',
    component: PaymentCheck2View
  },
  {
    path: '/ticket/poster',
    name: '/ticket/poster',
    component: MoviePosterView
  },
  {
    path: '/test/test',
    name: '/test/test',
    component: TestView
  },
  {
    path: '/ticket/choosepoint',
    name: '/ticket/choosepoint',
    component: ChoosePointView
  },
  {
    path: '/ticket/endpoint',
    name: '/ticket/endpoint',
    component: EndPointView
  },
  {
    path: '/ticket/pluspoint',
    name: '/ticket/pluspoint',
    component: PlusPointView
  },
  {
    path: '/ticket/pointuse',
    name: '/ticket/pointuse',
    component: PointUse
  },
  {
    path: '/foodstore/choosepoint2',
    name: '/foodstore/choosepoint2',
    component: ChoosePoint2View
  },
  {
    path: '/foodstore/endpoint2',
    name: '/foodstore/endpoint2',
    component: EndPoint2View
  },
  {
    path: '/foodstore/pluspoint2',
    name: '/foodstore/pluspoint2',
    component: PlusPoint2View
  },
  {
    path: '/foodstore/pointuse2',
    name: '/foodstore/pointuse2',
    component: PointUse2
  },
  {
    path: '/age12',
    name: '/age12',
    component: AgeGuide12
  },
  {
    path: '/age15',
    name: '/age15',
    component: AgeGuide15
  },
  {
    path: '/age18',
    name: '/age18',
    component: AgeGuide18
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
