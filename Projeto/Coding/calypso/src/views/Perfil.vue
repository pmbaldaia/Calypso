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
          <li v-if="getLoggedUser != null">
            <router-link class="link active" :to="{ name: 'perfil' }">{{
              getLoggedUser.username
            }}</router-link>
          </li>
          <li v-else>
            <router-link class="link" :to="{ name: 'login' }"
              >LOGIN<img class="icon-login" src="@/assets/icons/login.png"
            /></router-link>
          </li>
          <li>
            <b-button variant="outline-info" @click="logout">
              <b-icon icon="door-closed"></b-icon>
              Logout
            </b-button>
          </li>
        </ul>
      </nav>
    </header>
    <div v-if="getLoggedUser.type == 'admin'">
      <p>LISTA QUIZZES</p>
      <!-- ADICIONAR QUIZ-->
      <form>
        <form @submit.prevent="addQuiz">
          <label for="txtQuiz">Quiz</label>
          <input type="text" id="txtQuiz" v-model="form.name" required />
          <!--
          <label for="txtQuantity">Quantas perguntas?</label>
          <input
            type="number"
            id="txtQuantity"
            v-model="form.quantity"
            v-on:change="questionNumbers"
            required
          />-->
          <input type="submit" value="Adicionar quizz" />
          <div>
            <label for="txtQuestion">Question</label>
            <input
              type="text"
              id="txtQuestion"
              placeholder="Pergunta"
              style="margin: 5px"
              v-model="form.question1"
            />
            <div>
              <label for="txtAnswer">Answer</label>
              <input
                type="text"
                id="txtAnswer"
                placeholder="1"
                style="margin: 5px"
                v-model="form.answerText11"
              />
              <input
                type="radio"
                name="true"
                id="one"
                :value="answerTrue"
                v-model="form.answer11"
              />
              <input
                type="text"
                id="txtAnswer"
                placeholder="2"
                style="margin: 5px"
                v-model="form.answerText12"
              />
              <input
                type="radio"
                name="true"
                id="two"
                :value="answerTrue"
                v-model="form.answer12"
              />
              <input
                type="text"
                id="txtAnswer"
                placeholder="3"
                style="margin: 5px"
                v-model="form.answerText13"
              />
              <input
                type="radio"
                name="true"
                id="three"
                :value="answerTrue"
                v-model="form.answer13"
              />
              <input
                type="text"
                id="txtAnswer"
                placeholder="4"
                style="margin: 5px"
                v-model="form.answerText14"
              />
              <input
                type="radio"
                name="true"
                id="four"
                :value="answerTrue"
                v-model="form.answer14"
              />
            </div>
          </div>
        </form>
      </form>

      <table v-if="getQuizzes.length">
        <tr>
          <th>#</th>
          <th>NOME</th>
          <th>QUIZZES</th>
          <th>PERGUNTAS</th>
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
    <!-- CHILDREN 
    <div v-else>
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
    -->
    <div class="mainBackground container rounded bg-white mt-5 mb-5">
      <div class="row">
        <div class="col-md-4 border-right">
          <div
            class="d-flex flex-column align-items-center text-center p-3 py-5"
          >
            <img
              class="rounded-circle mt-5"
              width="150px"
              src="https://cdn.pixabay.com/photo/2016/08/31/11/54/user-1633249_1280.png"
            /><span class="font-weight-bold">{{ getLoggedUser.username }}</span
            ><span class="text-black-50">{{ getLoggedUser.email }}</span
            ><span></span>
            <button
              class="btn btn-primary profile-button"
              type="button"
              style="margin: 5px"
              @click="toRanking"
            >
              Ranking
            </button>
            <button
              class="btn btn-primary profile-button"
              type="button"
              style="margin: 5px"
              @click="toBadges"
            >
              Badges
            </button>
            <button
              class="btn btn-primary profile-button"
              type="button"
              style="margin: 5px"
              @click="toCreateQuizz"
            >
              Create Quizzes
            </button>
            <button
              class="btn btn-primary profile-button"
              type="button"
              style="margin: 5px"
              @click="toEditData"
            >
              EDITAR DADOS
            </button>
          </div>
        </div>
        <!--
        <div class="col-md-8 border-right">
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
                <button
                  class="btn btn-primary profile-button"
                  type="button"
                  style="margin-left: 15px"
                >
                  Editar Dados
                </button>
              </div>
            </div>
          </div>
        </div>
        -->
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
        question1: "",
        answerText11: "",
        answer11: "",
        answerText12: "",
        answer12: "",
        answerText13: "",
        answer13: "",
        answerText14: "",
        answer14: "",
        questions: [],
      },
      answerTrue: true,
    };
  },
  computed: {
    ...mapGetters([
      "getLoggedUser",
      "getQuizzes",
      "isQuiznameAvailable",
      "getLoggedUser",
    ]),
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
          questions: [
            {
              questionText: this.form.question1,
              answerOptions: [
                {
                  answerText: this.form.answerText11,
                  isCorrect: this.form.answer11 ? this.form.answer11 : false,
                },
                {
                  answerText: this.form.answerText12,
                  isCorrect: this.form.answer12 ? this.form.answer12 : false,
                },
                {
                  answerText: this.form.answerText13,
                  isCorrect: this.form.answer13 ? this.form.answer13 : false,
                },
                {
                  answerText: this.form.answerText14,
                  isCorrect: this.form.answer14 ? this.form.answer14 : false,
                },
              ],
            },
          ],
          children: [],
        });
      } else {
        alert("Quiz já existe! Tente novamente!");
      }
    },
    wantQuiz(quizname) {
      this.SET_WANT_QUIZ(quizname);
    },
    toRanking() {
      this.$router.push("perfilRanking");
    },
    toBadges() {
      this.$router.push("perfilBadges");
    },
    toCreateQuizz() {
      this.$router.push("perfilCreateQuizz");
    },
    toEditData() {
      this.$router.push("perfilMudarDados");
    },
    questionNumbers() {
      this.nbrQuestions = [];
      for (let i = 0; i < this.form.quantity; i++) {
        this.nbrQuestions.push(i + 1);
      }
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

.mainBackground {
  background: linear-gradient(to right, #ffb703 25%, #ed6a5a 40%);
}
</style>
