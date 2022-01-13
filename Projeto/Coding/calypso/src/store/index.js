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
    games: localStorage.games ?
      JSON.parse(localStorage.games) : [{
          title: "The Wheel of Time",
          image: require('@/assets/images/notimetodie.jpg'),
          lancamento: "2021",
          sinopse: "Em 007 - Sem Tempo Para Morrer, depois de sair do serviço ativo da MI6, James Bond (Daniel Craig) vive tranquilamente na Jamaica, mas como nem tudo dura pouco, a vida do espião 007 é agitada mais uma vez. Felix Leiter (Jeffrey Wright) é um velho amigo da CIA que procura o inglês para um pequeno favor de ajudá-lo em uma missão secreta. O que era pra ser apenas uma missão de resgate de um grupo de cientistas acaba sendo mais traiçoeira do que o esperado, levando o agente inglês 007 ao misterioso vilão, Safin (Rami Malek), que utiliza de novas armas de tecnologia avançada e extremamente perigosa.",
          director: "Cary Joji Fukunaga",
          writers: "Neal Purvis(screenplay by)Robert Wade(screenplay by)Cary Joji Fukunaga(screenplay by)",
          stars: "Daniel Craig - Ana de Armas - Rami Malek"
        },
        {
          title: "Outer Banks",
          image: require('@/assets/images/infiltrado.jpg'),
          lancamento: "test0",
          sinopse: "test1",
          director: "test2",
          writers: "test3",
          stars: "test4"
        },
        {
          title: "Peaky Blinders",
          image: require('@/assets/images/dune.jpg'),
          lancamento: "test01",
          sinopse: "test11",
          director: "test21",
          writers: "test31",
          stars: "test41",
        },
        {
          title: "Dark",
          image: require('@/assets/images/redNotice.jpg'),
          lancamento: "test02",
          sinopse: "test12",
          director: "test22",
          writers: "test32",
          stars: "test42"
        },
        {
          title: "You",
          image: require('@/assets/images/infiltrado.jpg'),
          lancamento: "test0",
          sinopse: "test1",
          director: "test2",
          writers: "test3",
          stars: "test4"
        },
        {
          title: "La Casa de Papel",
          image: require('@/assets/images/infiltrado.jpg'),
          lancamento: "test0",
          sinopse: "test1",
          director: "test2",
          writers: "test3",
          stars: "test4"
        },
        {
          title: "Maid",
          image: require('@/assets/images/infiltrado.jpg'),
          lancamento: "test0",
          sinopse: "test1",
          director: "test2",
          writers: "test3",
          stars: "test4"
        },
        {
          title: "Arcane",
          image: require('@/assets/images/infiltrado.jpg'),
          lancamento: "test0",
          sinopse: "test1",
          director: "test2",
          writers: "test3",
          stars: "test4"
        },
      ],
    filmes: localStorage.filmes ?
      JSON.parse(localStorage.filmes) : [{
          title: "Sem tempo para morrer",
          image: require('@/assets/images/notimetodie.jpg'),
          lancamento: "2021",
          sinopse: "Em 007 - Sem Tempo Para Morrer, depois de sair do serviço ativo da MI6, James Bond (Daniel Craig) vive tranquilamente na Jamaica, mas como nem tudo dura pouco, a vida do espião 007 é agitada mais uma vez. Felix Leiter (Jeffrey Wright) é um velho amigo da CIA que procura o inglês para um pequeno favor de ajudá-lo em uma missão secreta. O que era pra ser apenas uma missão de resgate de um grupo de cientistas acaba sendo mais traiçoeira do que o esperado, levando o agente inglês 007 ao misterioso vilão, Safin (Rami Malek), que utiliza de novas armas de tecnologia avançada e extremamente perigosa.",
          director: "Cary Joji Fukunaga",
          writers: "Neal Purvis(screenplay by)Robert Wade(screenplay by)Cary Joji Fukunaga(screenplay by)",
          stars: "Daniel Craig - Ana de Armas - Rami Malek"
        },
        {
          title: "Infiltrado",
          image: require('@/assets/images/infiltrado.jpg'),
          lancamento: "test0",
          sinopse: "test1",
          director: "test2",
          writers: "test3",
          stars: "test4"
        },
        {
          title: "Dune",
          image: require('@/assets/images/dune.jpg'),
          lancamento: "test01",
          sinopse: "test11",
          director: "test21",
          writers: "test31",
          stars: "test41",
        },
        {
          title: "Aviso Vermelho",
          image: require('@/assets/images/redNotice.jpg'),
          lancamento: "test02",
          sinopse: "test12",
          director: "test22",
          writers: "test32",
          stars: "test42"
        },
        {
          title: "Infiltrado",
          image: require('@/assets/images/infiltrado.jpg'),
          lancamento: "test0",
          sinopse: "test1",
          director: "test2",
          writers: "test3",
          stars: "test4"
        },
        {
          title: "Tick Tick...BOOM",
          image: require('@/assets/images/infiltrado.jpg'),
          lancamento: "test0",
          sinopse: "test1",
          director: "test2",
          writers: "test3",
          stars: "test4"
        },
        {
          title: "The Tomorrow War",
          image: require('@/assets/images/infiltrado.jpg'),
          lancamento: "test0",
          sinopse: "test1",
          director: "test2",
          writers: "test3",
          stars: "test4"
        },
        {
          title: "365 DNI",
          image: require('@/assets/images/infiltrado.jpg'),
          lancamento: "test0",
          sinopse: "test1",
          director: "test2",
          writers: "test3",
          stars: "test4"
        },
      ],
    filmeshomepage: localStorage.filmeshomepage ?
      JSON.parse(localStorage.filmeshomepage) : [{
          title: "Sem tempo para morrer",
          image: require('@/assets/images/notimetodie.jpg'),
          lancamento: "2021",
          sinopse: "Em 007 - Sem Tempo Para Morrer, depois de sair do serviço ativo da MI6, James Bond (Daniel Craig) vive tranquilamente na Jamaica, mas como nem tudo dura pouco, a vida do espião 007 é agitada mais uma vez. Felix Leiter (Jeffrey Wright) é um velho amigo da CIA que procura o inglês para um pequeno favor de ajudá-lo em uma missão secreta. O que era pra ser apenas uma missão de resgate de um grupo de cientistas acaba sendo mais traiçoeira do que o esperado, levando o agente inglês 007 ao misterioso vilão, Safin (Rami Malek), que utiliza de novas armas de tecnologia avançada e extremamente perigosa.",
          director: "Cary Joji Fukunaga",
          writers: "Neal Purvis(screenplay by)Robert Wade(screenplay by)Cary Joji Fukunaga(screenplay by)",
          stars: "Daniel Craig - Ana de Armas - Rami Malek"
        },
        {
          title: "Infiltrado",
          image: require('@/assets/images/infiltrado.jpg'),
          lancamento: "test0",
          sinopse: "test1",
          director: "test2",
          writers: "test3",
          stars: "test4"
        },
        {
          title: "Dune",
          image: require('@/assets/images/dune.jpg'),
          lancamento: "test01",
          sinopse: "test11",
          director: "test21",
          writers: "test31",
          stars: "test41",
        },
      ],
    series: localStorage.series ?
      JSON.parse(localStorage.series) : [{
          title: "The Wheel of Time",
          image: require('@/assets/images/notimetodie.jpg'),
          lancamento: "2021",
          sinopse: "Em 007 - Sem Tempo Para Morrer, depois de sair do serviço ativo da MI6, James Bond (Daniel Craig) vive tranquilamente na Jamaica, mas como nem tudo dura pouco, a vida do espião 007 é agitada mais uma vez. Felix Leiter (Jeffrey Wright) é um velho amigo da CIA que procura o inglês para um pequeno favor de ajudá-lo em uma missão secreta. O que era pra ser apenas uma missão de resgate de um grupo de cientistas acaba sendo mais traiçoeira do que o esperado, levando o agente inglês 007 ao misterioso vilão, Safin (Rami Malek), que utiliza de novas armas de tecnologia avançada e extremamente perigosa.",
          director: "Cary Joji Fukunaga",
          writers: "Neal Purvis(screenplay by)Robert Wade(screenplay by)Cary Joji Fukunaga(screenplay by)",
          stars: "Daniel Craig - Ana de Armas - Rami Malek"
        },
        {
          title: "Outer Banks",
          image: require('@/assets/images/infiltrado.jpg'),
          lancamento: "test0",
          sinopse: "test1",
          director: "test2",
          writers: "test3",
          stars: "test4"
        },
        {
          title: "Peaky Blinders",
          image: require('@/assets/images/dune.jpg'),
          lancamento: "test01",
          sinopse: "test11",
          director: "test21",
          writers: "test31",
          stars: "test41",
        },
        {
          title: "Dark",
          image: require('@/assets/images/redNotice.jpg'),
          lancamento: "test02",
          sinopse: "test12",
          director: "test22",
          writers: "test32",
          stars: "test42"
        },
        {
          title: "You",
          image: require('@/assets/images/infiltrado.jpg'),
          lancamento: "test0",
          sinopse: "test1",
          director: "test2",
          writers: "test3",
          stars: "test4"
        },
        {
          title: "La Casa de Papel",
          image: require('@/assets/images/infiltrado.jpg'),
          lancamento: "test0",
          sinopse: "test1",
          director: "test2",
          writers: "test3",
          stars: "test4"
        },
        {
          title: "Maid",
          image: require('@/assets/images/infiltrado.jpg'),
          lancamento: "test0",
          sinopse: "test1",
          director: "test2",
          writers: "test3",
          stars: "test4"
        },
        {
          title: "Arcane",
          image: require('@/assets/images/infiltrado.jpg'),
          lancamento: "test0",
          sinopse: "test1",
          director: "test2",
          writers: "test3",
          stars: "test4"
        },
      ],
    loggedUser: null,
    visitingFilme: "",
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
    getGames: (state) => state.games,
    getFilmes: (state) => state.filmes,
    getFilmeshomepage: (state) => state.filmeshomepage,
    getSeries: (state) => state.series,
    setVisitingFilme: (state) => state.visitingFilme,
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

    SET_ACTUAL_FILME(state, payload) {
      state.visitingFilme = payload
      localStorage.visitingFilme = JSON.stringify(state.visitingFilme)
    },
    SET_ACTUAL_SERIE(state, payload) {
      state.visitingSerie = payload
      localStorage.visitingSerie = JSON.stringify(state.visitingSerie)
    },
    SET_ACTUAL_GAME(state, payload) {
      state.visitingGame = payload
      localStorage.visitingGame = JSON.stringify(state.visitingGame)
    }

  },

  modules: {},
});