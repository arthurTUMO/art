import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Browse from './views/Browse.vue'
import Contact from './views/Contact.vue'
import Display from './views/Display.vue'
import Test from './views/Test.vue'
import Submit from './views/Submit.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/browse',
      name: 'browse',
      component: Browse
    },
    {
      path: '/display/:id',
      name: 'display',
      component: Display
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/submit',
      name: 'submit',
      component: Submit
    }
  ]
})
