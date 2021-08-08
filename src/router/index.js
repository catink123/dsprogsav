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
  {
    path: '/:gameName',
    component: Section,
    props: route => {
      return {
        gameName: route.params.gameName
      }
    }
  }

]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
