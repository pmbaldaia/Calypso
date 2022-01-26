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
            <router-link class="link active" :to="{ name: 'perfil' }">{{
              getLoggedUser.username
            }}</router-link>
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
          <th>QUIZZES</th>
          <th>PERGUNTAS</th>
        </tr>
        <tr v-for="(quiz, index) in rankPeople" :key="index">
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
              style="margin: 5px; margin-top: 40px"
              @click="toEditData"
            >
              EDITAR DADOS
            </button>
          </div>
        </div>
        <div class="col-md-8 border-right">
          <div class="p-3 py-5">
            <b-table
              hover
              :items="rankedPeople"
              :fields="fields"
              style="color: white"
            >
            </b-table>
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
      rankedPeople: [],
      fields: ["rank", "username", "pontos"],
    };
  },
  computed: {
    ...mapGetters([
      "getLoggedUser",
      "getQuizzes",
      "isQuiznameAvailable",
      "getUsers",
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
      this.$router.push("perfil");
    },
    rankPeople() {
      for (let i in this.getUsers) {
        if (this.getUsers[i].type === "user") {
          this.rankedPeople.push(this.getUsers[i]);
        }
      }
      this.rankedPeople.sort((a, b) => b.pontos - a.pontos);
      for (let i in this.rankedPeople) {
        let place = parseInt(i) + 1;
        this.rankedPeople[i].rank = place;
      }
    },
  },
  created() {
    this.rankPeople();
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
td {
  color: white;
}
</style>
