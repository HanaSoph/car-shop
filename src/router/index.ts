import { createRouter, createWebHistory } from 'vue-router'
import VehicleList from '@/views/VehicleList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'vehicle-list',
      component: VehicleList,
    },
  ],
})

export default router
