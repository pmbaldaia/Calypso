import Vue from "vue";
import VueRouter from "vue-router";
import Homepage from "../views/Homepage.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Quizzes from "../views/Quizzes.vue";

import store from "../store/index.js";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "homepage",
    component: Homepage,
  }, {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/quizzes",
    name: "quizzes",
    component: Quizzes,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters.getLoggedUser) {
    next({
      name: "login"
    });
  } else {
    next();
  }
});

export default router;