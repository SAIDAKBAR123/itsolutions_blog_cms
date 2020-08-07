import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import goTo from 'vuetify/es5/services/goto'
// import store from '../store/index'
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: () => import('../views/Main.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home,
        accessControl: true
      },
      {
        path: '/requests',
        name: 'Requests',
        accessControl: true,
        component: () => import('../views/Requests.vue')
      },
      {
        path: '/blog',
        name: 'Blog',
        accessControl: true,
        component: () => import('../views/Blog.vue')
      },
      {
        path: '/create-post',
        name: 'NewPost',
        accessControl: true,
        component: () => import('../Layout/CreatePost.vue')
      },
      {
        path: '/edit-post/:id',
        name: 'EditPost',
        props: true,
        accessControl: true,
        component: () => import('../Layout/EditPost.vue')
      },
      {
        path: '/portfolio',
        name: 'Portfolio',
        accessControl: true,
        component: () => import('../views/Portfolio.vue')
      },
      {
        path: '/portfolio/new-project',
        name: 'CreateProject',
        accessControl: true,
        component: () => import('../Layout/CreateProject.vue')
      },
      {
        path: '/portfolio/:id',
        props: true,
        name: 'CreateProjects',
        accessControl: true,
        component: () => import('../Layout/EditProject.vue')
      },
      {
        path: '/settings',
        name: 'Settings',
        accessControl: true,
        component: () => import('../views/Settings.vue')
      },
      {
        path: '/comments-list',
        name: 'Comments',
        accessControl: true,
        component: () => import('../views/CommentsAndMails.vue')
      }
    ]
  },
  {
    path: '',
    component: () => import('../views/Pages/LoginPage.vue'),
    children: [
      {
        path: '/pages/login',
        name: 'page-login',
        component: () => import('../views/Pages/Login.vue')
      }]
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

// router.beforeEach((to, from, next) => {
//   // const isAuthenticated = store.state.userToken // false
//   // if (!isAuthenticated) next('/pages/login')
//   // else {
//   //   next('/')
//   // }
//   // const role = true
//   // console.log(to)
//   // if (to.matched.some(access => access.accessControl)) {
//   //   console.log('dasd')
//   //   if (!(store.state.userToken.length > 0)) {
//   //     next('/pages/login')
//   //   } else {
//   //     next()
//   //   }
//   // } else {
//   //   next()
//   // }
// })

export default router
