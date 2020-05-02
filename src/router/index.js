import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import goTo from 'vuetify/es5/services/goto'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'Home',
    component: () => import('../views/Main.vue'),
    children: [
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
      },
      {
        path: '/portfolio',
        name: 'Portfolio',
        component: () => import('../views/Portfolio.vue')
      },
      {
        path: '/portfolio/new-project',
        name: 'CreateProject',
        component: () => import('../Layout/CreateProject.vue')
      },
      {
        path: '/settings',
        name: 'Settings',
        component: () => import('../views/Settings.vue')
      },
      {
        path: '/comments-list',
        name: 'Comments',
        component: () => import('../views/CommentsAndMails.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Pages/Login.vue')
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
