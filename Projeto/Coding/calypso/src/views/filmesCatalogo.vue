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
            <router-link class="link active" :to="{ name: '' }"
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
      <div>
        <b-container fluid class="p-4">
          <b-row>
            <b-col v-for="(film, index) in getFilmes" :key="index"
              ><b-card
                class="m-3"
                :title="film.title"
                :img-src="film.image"
                img-alt="Image"
                img-top
                tag="film"
                style="max-width: 20rem"
              >
                <b-link
                  class="card-link stretched-link"
                  @click="chooseFilm(film.title)"
                ></b-link></b-card
            ></b-col>
          </b-row>
        </b-container>
      </div>
    </body>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "filmsCatalogo",
  computed: {
    ...mapGetters(["getFilmes"]),
  },
  methods: {
    ...mapMutations(["SET_ACTUAL_FILM"]),
    chooseFilm(title) {
      this.SET_ACTUAL_FILM(title);
      this.$router.push("filmsDetalhes");
    },
  },
};
</script>

<style lang="scss" scoped></style>
