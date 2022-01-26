import Vue from "vue";
import VueRouter from "vue-router";
import Homepage from "../views/Homepage.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Perfil from "../views/Perfil.vue";
import FilmeCatalogo from "../views/filmesCatalogo.vue";
import FilmeDetalhes from "../views/filmeDetalhes.vue";
import SeriesCatalogo from "../views/seriesCatalogo.vue";
import QuizzesCatalogo from "../views/quizzesCatalogo.vue";
import QuizDetalhes from "../views/quizDetalhes.vue";
import perfilMudarDados from "../views/PerfilDados.vue";
import perfilBadges from "../views/PerfilBadges.vue";
import perfilCreateQuizz from "../views/PerfilQuizz.vue";
import perfilRanking from "../views/PerfilRanking.vue";


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
    path: "/perfil",
    name: "perfil",
    component: Perfil,
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
  {
    path: "/quizDetalhes",
    name: "quizDetalhes",
    component: QuizDetalhes,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/perfilRanking",
    name: "perfilRanking",
    component: perfilRanking,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/perfilBadges",
    name: "perfilBadges",
    component: perfilBadges,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/perfilCreateQuizz",
    name: "perfilCreateQuizz",
    component: perfilCreateQuizz,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/perfilMudarDados",
    name: "perfilMudarDados",
    component: perfilMudarDados,
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