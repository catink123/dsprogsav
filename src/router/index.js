import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Section from '../views/Section.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  /* {
    path: '/religion',
    name: 'Religion',
    component: () => import('../views/ReligionSection.vue')
  },
  {
    path: '/armory',
    name: 'Armory',
    component: () => import('../views/ArmorySection.vue')
  },
  {
    path: '/pyromancy',
    name: 'Pyromancy',
    component: () => import('../views/PyromancySection.vue')
  } */
  {
    path: '/:gameName/:sectionName',
    component: Section,
    props: route => {
      return {
        sectionName: route.params.sectionName,
        gameName: route.params.gameName
      }
    }
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
