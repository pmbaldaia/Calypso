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
          <b-col class="mainInfo" style="margin-top: 120px">
            <div class="mainInfoBack">
              <h1 style="margin-top: 30px; margin-left: 30px">
                {{ actualFilm[0].title }}
              </h1>
              <p style="font-size: 25px; margin-top: 60px; margin-left: 30px">
                {{ actualFilm[0].lancamento }}
              </p>
            </div>
          </b-col>
          <b-col style="margin-top: 120px"
            ><b-img
              :src="actualFilm[0].image"
              style="width: 720px; margin-left: 400px; position: absolute"
            ></b-img>
          </b-col>
        </b-row>
        <b-row class="secondInfo">
          <b-col class="secondInfoFront">
            <h1 style="margin-top: 150px">Sinopse</h1>
            <p>
              {{ actualFilm[0].sinopse }}
            </p>
            <br />
            <h1>Diretor</h1>
            <p>{{ actualFilm[0].director }}</p>
            <br />
            <h1>Escritor</h1>
            <p>{{ actualFilm[0].writers }}</p>
            <br />
            <h1>Atores</h1>
            <p>{{ actualFilm[0].stars }}</p>
          </b-col>
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
      console.log(this.setVisitingFilm);
    },
  },
  created() {
    this.checkWhichFilm();
  },
};
</script>

<style>
.mainInfo {
  position: absolute;
  z-index: 1;
  height: 450px;
  width: 450px;
  margin-left: 60px;
  font-family: Rubik;
  color: white;
  padding-bottom: 8%;
  background: #ffb703;
  clip-path: polygon(0 0, 100% 0, calc(100% - 50px) 100%, 0% 100%);
}
.mainInfoBack {
  position: absolute;
  margin-left: -15px;
  z-index: 2;
  height: 450px;
  width: 450px;
  padding-bottom: 8%;
  background: #ed6a5a;
  clip-path: polygon(0 0, 95% 0, calc(95% - 50px) 95%, 0% 95%);
}
.secondInfo {
  position: relative;
  color: white;
  margin-top: 600px;
  text-align: center;
  background: #ffb703;
  clip-path: polygon(0% 5%, 100% 0%, 100% 100%, 0% 100%);
}
.secondInfoFront {
  position: relative;
  text-align: center;
  background: #ed6a5a;
  clip-path: polygon(0% 15%, 100% 10%, 100% 100%, 0% 100%);
}
</style>
