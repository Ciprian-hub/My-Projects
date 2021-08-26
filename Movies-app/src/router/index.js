import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Movie from "../views/MoviePage";
import Login from "../views/Login";
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movie/:id',
    name: 'movie',
    // meta: { auth: true },
    component: Movie
  },
  {
    path: '/admin',
    meta: { auth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach(async ({ name, meta: { auth } }, from, next) => {
  const user = store.state.auth.user;
  if (auth && !user.name) {
    await store.dispatch('check_login', { next });
  } else {
    next()
  }
});

export default router
