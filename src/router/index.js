import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Vuex from "../views/vuex/Display";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Vuex",
    redirect: "/vuex",
    component: Vuex,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  { path: "/vuex", name: "Vuex demo", component: Vuex },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
