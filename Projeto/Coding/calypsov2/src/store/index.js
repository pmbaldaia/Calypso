import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  data() {
    return {
      file: null,
      mainImage: {
        center: true,
        blank: true,
        width: 200,
        height: 200,
      },
      mainBadges: {
        width: 200,
        height: 200,
      },
      items: [{
          Posição: 1,
          Utilizador: "UserTest",
          Pontuação: 1000,
        },
        {
          Posição: 2,
          Utilizador: "UserTest1",
          Pontuação: 800
        },
        {
          Posição: 3,
          Utilizador: "UserTest2",
          Pontuação: 200
        },
        {
          Posição: 4,
          Utilizador: "UserTest3",
          Pontuação: 20
        },
      ],
    }
  },
  state: {
    users: localStorage.users ? JSON.parse(localStorage.users) : [{
      username: "admin",
      password: "admin",
      checkpassword: "admin",
      email: "admin@admin.pt",
      type: "admin",
    }, {
      username: "teste",
      password: "teste",
      checkpassword: "teste",
      email: "teste@gmail.com",
      type: "user",
    }],
    quizzes: localStorage.quizzes ? JSON.parse(localStorage.quizzes) : [{
      title: "007 Quizz",
      type: "text",
      image: "https://picsum.photos/1024/480/?image=52",
      points: "12",
      questions: "test",
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
    getUsers: (state) => state.users,
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
  },

  modules: {},
});