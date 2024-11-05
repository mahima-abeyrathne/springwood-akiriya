import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Contact from '../views/Contact.vue'
import packages from '../views/packages.vue'
import gallery from '../views/gallery.vue'
import booking from '../views/booking.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView

  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact

  },
  {
    path: '/packages',
    name: 'packages',
    component: packages
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: gallery
  },
  {
    path: '/booking',
    name: 'booking',
    component: booking
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
