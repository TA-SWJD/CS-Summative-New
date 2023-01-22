import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Home from "../views/homeview.vue";
import Movie from "../views/movie.vue";
import Cart from "../views/cart.vue";
import LoginHome from "../views/Loginhome.vue";

const routes = [
  {
    path: '/',
    component:Home,
  },
  {
    path: '/Login',
    component:Login,
  },
  {
    path: '/Movie',
    component: Movie,
  },
  {
    path: '/Cart',
    component: Cart,
  },
  {
    path: '/LoginHome',
    component: LoginHome,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;