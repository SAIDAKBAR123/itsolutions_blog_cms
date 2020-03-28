import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import goTo from 'vuetify/es5/services/goto'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/requests',
    name: 'Requests',
    component: () => import('../views/Requests.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog.vue')
  },
  {
    path: '/create-post',
    name: 'NewPost',
    component: () => import('../Layout/CreatePost.vue')
  }
]

const router = new VueRouter({
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0

    if (to.hash) {
      scrollTo = to.hash
    } else if (savedPosition) {
      scrollTo = savedPosition.y
    }

    return goTo(scrollTo)
  },
  base: process.env.BASE_URL,
  routes
})

export default router
