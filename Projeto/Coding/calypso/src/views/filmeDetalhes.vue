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
            <router-link class="link" :to="{ name: '' }">QUIZZES</router-link>
          </li>
          <li>
            <router-link class="link active" :to="{ name: 'filmsCatalogo' }"
              >FILMES</router-link
            >
          </li>
          <li>
            <router-link class="link" :to="{ name: '' }">SÉRIES</router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name: 'login' }"
              >LOGIN<img class="icon-login" src="@/assets/icons/login.png"
            /></router-link>
          </li>
        </ul>
      </nav>
    </header>
    <body>
      <b-container>
        <b-row>
          <b-col style="margin-top: 100px">{{ actualFilm }}</b-col>
        </b-row>
      </b-container>
    </body>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "filmsDetalhes",
  data() {
    return {
      actualFilm: [],
    };
  },
  computed: {
    ...mapGetters(["getFilmes", "setVisitingFilm"]),
  },
  methods: {
    ...mapMutations(["SET_ACTUAL_FILM"]),
    checkWhichFilm() {
      this.actualFilm.push(
        this.getFilmes.find((film) => film.title == this.setVisitingFilm)
      );
      console.log(this.setVisitingFilm + "1");
      console.log(this.actualFilm);
    },
  },
  created() {
    this.checkWhichFilm();
  },
};
</script>

<style lang="scss" scoped></style>
