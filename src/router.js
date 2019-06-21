import Vue from 'vue'
import Router from 'vue-router'
import Profile from './views/Profile.vue'
import NotFoundPage from './views/NotFoundPage.vue'
import Header from './components/Header.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/profile'
    },
    {
      path: '',
      name: 'header',
      component: Header,
      children: [
        {
          path: '/profile',
          name: 'profile',
          component: Profile
        },
        {
          path: '/',
          name: 'notfoundpage',
          component: NotFoundPage
        }
      ]
    }
  ]
})
