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
            <router-link class="link active" :to="{ name: '' }"
              >SÉRIES</router-link
            >
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
          <b-col>
            <nav class="navbar navbarcatalogos">
              <div>
                <b-dropdown
                  variant="light"
                  text="Ano"
                  class="m-md-2 btn-outline"
                >
                  <b-dropdown-item>2022</b-dropdown-item>
                  <b-dropdown-item>2021</b-dropdown-item>
                  <b-dropdown-item>2020</b-dropdown-item>
                  <b-dropdown-item>2019</b-dropdown-item>
                  <b-dropdown-item disabled>...</b-dropdown-item>
                </b-dropdown>
                <b-dropdown
                  variant="light"
                  text="Categoria"
                  class="m-md-2 btn-outline"
                >
                  <b-dropdown-item>Ação</b-dropdown-item>
                  <b-dropdown-item>Comédia</b-dropdown-item>
                  <b-dropdown-item>Drama</b-dropdown-item>
                  <b-dropdown-item>Mistério</b-dropdown-item>
                  <b-dropdown-item>Romance</b-dropdown-item>
                  <b-dropdown-item>Terror</b-dropdown-item>
                  <b-dropdown-item disabled>...</b-dropdown-item>
                </b-dropdown>
              </div>
              <form class="form-inline" style="padding-right: 50px">
                <input
                  class="form-control btn-outline mr-sm-2"
                  type="search"
                  placeholder="Pesquisar"
                  aria-label="Pesquisar"
                />
                <button class="btn btn-outline my-2 my-sm-0" type="submit">
                  Pesquisar
                </button>
              </form>
            </nav>
          </b-col>
        </b-row>
        <br />
        <h3>SÉRIES</h3>
        <b-row no-gutters class="cardspadding">
          <b-col sm="4" v-for="(serie, index) in getSeries" :key="index"
            ><b-card
              class="m-3"
              :title="serie.title"
              :img-src="serie.image"
              img-top
              tag="serie"
              style="max-width: 25rem; color: #1d2021"
            >
              <b-link
                class="card-link stretched-link"
                @click="chooseSerie(serie.title)"
              ></b-link></b-card
          ></b-col>
        </b-row>

        <b-row style="padding-top: 50px">
          <b-col>
            <footer>
              <div class="footer-middle">
                <div class="container">
                  <div class="row">
                    <div class="col-md-4 col-sm-6">
                      <div class="footer-pad">
                        <ul>
                          <li><a href="#">Sobre nós</a></li>
                          <li><a href="#">Localização</a></li>
                          <li><a href="#">Política de Privacidade</a></li>
                          <li><a href="#">Termos de Utilização</a></li>
                          <li><a href="#">FAQs</a></li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-md-4 col-sm-6">
                      <div class="footer-pad">
                        <ul>
                          <li><a href="#">+351 91#######</a></li>
                          <li><a href="#">calypso@gmail.com</a></li>
                          <li><a href="#">Argivai, Vila do Conde</a></li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-md-4 col-sm-6">
                      <div class="footer-pad">
                        <ul class="social-network">
                          <li>CALYPSO</li>
                          <br /><br />
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              fill="white"
                              class="bi bi-whatsapp"
                              viewBox="0 0 16 16"
                            >
                              <path
                                d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
                              />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              fill="white"
                              class="bi bi-facebook"
                              viewBox="0 0 16 16"
                            >
                              <path
                                d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                              />
                            </svg>
                          </li>
                          <li>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              fill="white"
                              class="bi bi-youtube"
                              viewBox="0 0 16 16"
                            >
                              <path
                                d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"
                              />
                            </svg>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 copy">
                      <p class="text-center">
                        &copy; Copyright 2022 - CALYPSO. All rights reserved.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </b-col>
        </b-row>
      </div>
    </body>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "seriesCatalogo",
  computed: {
    ...mapGetters(["getSeries"]),
  },
  methods: {
    ...mapMutations(["SET_ACTUAL_SERIE"]),
    chooseSerie(title) {
      this.SET_ACTUAL_SERIE(title);
      this.$router.push("serieDetalhes");
    },
  },
};
</script>

<style>
.navbarcatalogos {
  width: 100%;
  height: 100%;
  color: #023047;
  font-family: Rubik;
  padding-left: 35px;
}

.btn-outline {
  color: #ed6a5a;
  background: white;
  border: 1px solid #ed6a5a;
}

.cardspadding {
  padding-left: 28px;
}

h3 {
  padding-left: 45px;
  color: #023047;
}
</style>
