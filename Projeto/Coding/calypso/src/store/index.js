import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    quizzes: localStorage.quizzes ? JSON.parse(localStorage.quizzes) : [],
    users: localStorage.users ?
      JSON.parse(localStorage.users) : [{
        username: "admin",
        password: "admin",
        email: "admin@admin.pt",
        type: "admin",
        location: "admin",
      }, ],
    loggedUser: null,
  },
  getters: {
    isUser: (state) => (username, password) =>
      state.users.some(
        (user) => user.username === username && user.password === password
      ),
    isUsernameAvailable: (state) => (username) =>
      state.users.every((user) => user.username !== username),
    getLoggedUser: (state) => state.loggedUser,
    isQuiznameAvailable: (state) => (name) =>
      state.quizzes.every((quiz) => quiz.name !== name),

    getQuizzes: (state) => state.quizzes,
  },
  mutations: {
    SET_LOGGED_USER(state, payload) {
      state.loggedUser = state.users.find((user) => user.username === payload);
      localStorage.loggedUser = JSON.stringify(state.loggedUser);
    },
    SET_NEW_USER(state, payload) {
      state.users.push(payload);
      localStorage.users = JSON.stringify(state.users);
    },
    SET_LOGOUT(state) {
      state.loggedUser = null;
      localStorage.removeItem("loggedUser");
    },
    SET_NEW_QUIZ(state, payload) {
      state.quizzes.push(payload);
      localStorage.quizzes = JSON.stringify(state.quizzes);
    },
    SET_WANT_QUIZ(state, payload) {
      state.quizzes.map((quiz) => {
        if (quiz.name === payload) {
          quiz.quantity--;
          quiz.children.push(state.loggedUser.username);
          state.loggedUser.quizzes = 1;
        }
      });
      localStorage.quizzes = JSON.stringify(state.quizzes);
      localStorage.loggedUser = JSON.stringify(state.loggedUser);
    },
  },

  modules: {},
});