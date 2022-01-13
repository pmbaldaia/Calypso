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
        <b-row>
          <b-col sm="3">
            <b-dropdown id="dropdown-1" text="Ano" class="m-md-2">
              <b-dropdown-item>2022</b-dropdown-item>
              <b-dropdown-item>2021</b-dropdown-item>
              <b-dropdown-item>2020</b-dropdown-item>
              <b-dropdown-item>2019</b-dropdown-item>
              <b-dropdown-item disabled>...</b-dropdown-item>
            </b-dropdown>
            <b-dropdown id="dropdown-1" text="Categoria" class="m-md-2">
              <b-dropdown-item>Ação</b-dropdown-item>
              <b-dropdown-item>Comédia</b-dropdown-item>
              <b-dropdown-item>Drama</b-dropdown-item>
              <b-dropdown-item>Mistério</b-dropdown-item>
              <b-dropdown-item>Romance</b-dropdown-item>
              <b-dropdown-item>Terror</b-dropdown-item>
              <b-dropdown-item disabled>...</b-dropdown-item>
            </b-dropdown>
            <b-nav-form>
              <b-form-input
                size="sm"
                class="mr-sm-2"
                placeholder="Search"
              ></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit"
                >Search</b-button
              >
            </b-nav-form>
          </b-col>
        </b-row>
        <b-row no-gutters>
          <b-col sm="3" v-for="(film, index) in getFilmes" :key="index"
            ><b-card
              class="m-3"
              :title="film.title"
              :img-src="film.image"
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

<style>
.cornav {
  font-family: Rubik;
  color: red;
}
</style>
