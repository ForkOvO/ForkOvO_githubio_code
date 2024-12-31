import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Skin from '@/views/Skin.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/Skin',
      component: Skin
    }
  ]
})

export default router