<template>
  <div>
    <header>
      <nav>
        <div class="branding">
          <h1>CALYPSO</h1>
        </div>
        <link
          href="https://fonts.googleapis.com/css?family=Rubik:500,500i"
          rel="stylesheet"
        />
        <ul class="navigation">
          <li>
            <router-link class="link" :to="{ name: 'homepage' }"
              >INÍCIO</router-link
            >
          </li>
          <li>
            <router-link class="link" :to="{ name: 'quizzesCatalogo' }"
              >QUIZZES</router-link
            >
          </li>
          <li>
            <router-link class="link" :to="{ name: 'filmesCatalogo' }"
              >FILMES</router-link
            >
          </li>
          <li>
            <router-link class="link" :to="{ name: 'seriesCatalogo' }"
              >SÉRIES</router-link
            >
          </li>
          <li>
            <router-link class="link active" :to="{ name: 'perfil' }"
              >Perfil</router-link
            >
          </li>
          <li>
            <router-link class="link" @click="logout">LOGOUT</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <h5>
      Iniciou sessão como *{{ getLoggedUser.username }}* |
      <a href="#" @click="logout">LOGOUT</a>
    </h5>
    <p>LISTA QUIZZES</p>
    <div v-if="getLoggedUser.type == 'admin'">
      <!-- ADICIONAR QUIZ-->
      <form>
        <form @submit.prevent="addQuiz">
          <label for="txtQuiz">Quiz</label>
          <input type="text" id="txtQuiz" v-model="form.name" required />
          <label for="txtQuantity">Quantas perguntas?</label>
          <input
            type="number"
            id="txtQuantity"
            v-model="form.quantity"
            required
          />
          <input type="submit" value="Adicionar quizz" />
        </form>
      </form>
      <table v-if="getQuizzes.length">
        <tr>
          <th>#</th>
          <th>NOME</th>
          <th>QUANTIDADE</th>
          <th>CRIANÇAS</th>
        </tr>
        <tr v-for="(quiz, index) in getQuizzes" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ quiz.name }}</td>
          <td>{{ quiz.quantity }}</td>
          <td>{{ quiz.children ? quiz.children.join(",") : "NO" }}</td>
        </tr>
      </table>
      <p v-else>SEM QUIZZES</p>
    </div>
    <div v-else>
      <!-- CHILDREN -->
      <table v-if="getQuizzes.length">
        <tr>
          <th>#</th>
          <th>NOME</th>
          <th>QUANTIDADE</th>
          <th>OPÇÕES</th>
        </tr>
        <tr v-for="(quiz, index) in getQuizzes" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ quiz.name }}</td>
          <td>{{ quiz.quantity }}</td>
          <td>
            <input
              :disabled="getLoggedUser.quizzes > 0"
              type="button"
              value="QUERO"
              @click="wantQuiz(quiz.name)"
              v-show="quiz.quantity > 0"
            />
          </td>
        </tr>
      </table>
      <p v-else>SEM QUIZZES</p>
    </div>
    <div class="container rounded bg-white mt-5 mb-5">
      <div class="row">
        <div class="col-md-3 border-right">
          <div
            class="d-flex flex-column align-items-center text-center p-3 py-5"
          >
            <img
              class="rounded-circle mt-5"
              width="150px"
              src="https://cdn.pixabay.com/photo/2016/08/31/11/54/user-1633249_1280.png"
            /><span class="font-weight-bold">{{ getLoggedUser.username }}</span
            ><span class="text-black-50">{{ getLoggedUser.email }}</span
            ><span> </span>
          </div>
        </div>
        <div class="col-md-5 border-right">
          <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h4 class="text-right">Página de Perfil - Editar Dados</h4>
            </div>
            <div class="row mt-2">
              <div class="col-md-6">
                <label class="labels">Username</label
                ><input
                  type="text"
                  class="form-control"
                  placeholder="Username"
                  value=""
                />
              </div>
              <div class="col-md-6">
                <label class="labels">Email</label
                ><input
                  type="text"
                  class="form-control"
                  value=""
                  placeholder="Email"
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-12">
                <label class="labels">Password </label
                ><input
                  type="text"
                  class="form-control"
                  placeholder="Password"
                  value=""
                />
              </div>
              <div class="col-md-12">
                <label class="labels">Confirmar Password</label
                ><input
                  type="text"
                  class="form-control"
                  placeholder="Confirmar Password"
                  value=""
                />
              </div>

              <div class="mt-5 text-center">
                <button class="btn btn-primary profile-button" type="button">
                  Editar Dados
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Quizzes",
  data() {
    return {
      form: {
        name: "",
        quantity: 0,
      },
    };
  },
  computed: {
    ...mapGetters(["getLoggedUser", "getQuizzes", "isQuiznameAvailable"]),
  },
  methods: {
    ...mapMutations(["SET_LOGOUT", "SET_NEW_QUIZ", "SET_WANT_QUIZ"]),
    logout() {
      this.SET_LOGOUT();
      this.$router.push({ name: "login" });
    },
    addQuiz() {
      if (this.isQuiznameAvailable(this.form.name)) {
        this.SET_NEW_QUIZ({
          name: this.form.name,
          quantity: this.form.quantity,
          children: [],
        });
      } else {
        alert("Quiz já existe! Tente novamente!");
      }
    },
    wantQuiz(quizname) {
      this.SET_WANT_QUIZ(quizname);
    },
  },
};
</script>

<style>
.form-control:focus {
  box-shadow: none;
  border-color: #023047;
}

.profile-button {
  background: #023047;
  box-shadow: none;
  border: none;
}

.profile-button:hover {
  background: #023047;
}

.profile-button:focus {
  background: #023047;
  box-shadow: none;
}

.profile-button:active {
  background: #023047;
  box-shadow: none;
}

.back:hover {
  color: #023047;
  cursor: pointer;
}

.labels {
  font-size: 11px;
}

.add-experience:hover {
  background: #023047;
  color: #fff;
  cursor: pointer;
  border: solid 1px #023047;
}
</style>
