import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartView from '@/views/CartView.vue'
import ServicesView from '@/views/ServicesView.vue'
import MenuView from '@/views/MenuView.vue'
import ContactView from '@/views/ContactView.vue'
import LoginView from '@/views/SigninView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: LoginView
  },

  {
    path: '/home',
    component: HomeView
  },

  {
    path: '/cart',
    component: CartView
  },

  {
    path: '/services',
    component: ServicesView
  },
  
  {
    path: '/menu',
    component: MenuView
  },

  {
    path: '/contact',
    component: ContactView
  }
]

const router = new VueRouter({
  routes
})

export default router
