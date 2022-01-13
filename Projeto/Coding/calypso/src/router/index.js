import Vue from "vue";
import VueRouter from "vue-router";
import Homepage from "../views/Homepage.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Quizzes from "../views/Quizzes.vue";
import FilmeCatalogo from "../views/filmesCatalogo.vue";
import FilmeDetalhes from "../views/filmeDetalhes.vue";
import SeriesCatalogo from "../views/seriesCatalogo.vue";
import QuizzesCatalogo from "../views/quizzesCatalogo.vue";

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
  {
    path: "/filmesCatalogo",
    name: "filmesCatalogo",
    component: FilmeCatalogo,
  },
  {
    path: "/filmeDetalhes",
    name: "filmeDetalhes",
    component: FilmeDetalhes,
  },
  {
    path: "/seriesCatalogo",
    name: "seriesCatalogo",
    component: SeriesCatalogo,
  },
  {
    path: "/quizzesCatalogo",
    name: "quizzesCatalogo",
    component: QuizzesCatalogo,
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