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
            <router-link class="link active" :to="{ name: 'filmesCatalogo' }"
              >FILMES</router-link
            >
          </li>
          <li>
            <router-link class="link" :to="{ name: 'seriesCatalogo' }"
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
      <div class="tituloquiz">
        <p>
          {{ actualFilme[0].title }}
        </p>
        <p class="subtitulo">
          {{ actualFilme[0].lancamento }}
        </p>
      </div>
      <br />
      <b-container>
        <b-row>
          <b-col>
            <b-embed
              type="iframe"
              aspect="16by9"
              src="https://www.youtube.com/embed/BIhNsAtPbPI"
              allowfullscreen
            ></b-embed>
            <div>
              <br />
              <b-img :src="actualFilme[0].image"></b-img>
              <b-form-checkbox
                style="color: #023047; float: right"
                id="checkbox"
                v-model="status"
                name="checkbox"
                value="Marcar como não visto"
                unchecked-value="Marcar como visto"
              >
                <strong>{{ status }}</strong>
              </b-form-checkbox>
            </div>
            <h1>Sinopse</h1>
            <p>
              {{ actualFilme[0].sinopse }}
            </p>
            <br />
            <h1>Diretor</h1>
            <p>{{ actualFilme[0].director }}</p>
            <br />
            <h1>Escritor</h1>
            <p>{{ actualFilme[0].writers }}</p>
            <br />
            <h1>Atores</h1>
            <p>{{ actualFilme[0].stars }}</p>
          </b-col>
        </b-row> </b-container
      ><br />
      <b-container>
        <b-card style="max-width: 20rem" class="mb-5 comentarios"
          ><link
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
            rel="stylesheet"
          />
          <div class="container">
            <div class="be-comment-block">
              <h1 class="comments-title">Comentários (3)</h1>
              <form class="form-block">
                <div class="row">
                  <div>
                    <div class="form-group">
                      <textarea
                        class="form-input"
                        placeholder="O seu comentário"
                      ></textarea>
                    </div>
                  </div>
                  <b-button
                    class="btn"
                    style="background: #023047; color: #fff"
                    id="show-btn"
                    @click="$bvModal.show('modalaviso')"
                    >Comentar</b-button
                  >

                  <b-modal id="modalaviso" hide-footer>
                    <template #modal-title>
                      AVISO
                      <u style="color: #ed6a5a">{{ getLoggedUser.username }}</u>
                    </template>
                    <div class="d-block text-center">
                      <b-alert show variant="danger" class="text-center"
                        >Só pode comentar se tiver iniciado sessão</b-alert
                      >
                    </div>
                    <b-button
                      class="mt-3 btn-danger"
                      block
                      @click="$bvModal.hide('modalaviso')"
                      >Fechar</b-button
                    >
                  </b-modal>
                </div>
                <br />
              </form>
              <div class="be-comment">
                <div class="be-img-comment">
                  <a href="#">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                      alt=""
                      class="be-ava-comment"
                    />
                  </a>
                </div>
                <div class="be-comment-content">
                  <span class="be-comment-name">
                    <a href="">Ravi Sah</a>
                  </span>
                  <span class="be-comment-time">
                    <i class="fa fa-clock-o"></i>
                    12 janeiro, 2022 pelas 9:30h
                  </span>

                  <p class="be-comment-text">
                    Pellentesque gravida tristique ultrices. Sed blandit varius
                    mauris, vel volutpat urna hendrerit id. Curabitur rutrum
                    dolor gravida turpis tristique efficitur.
                  </p>
                  <div class="be-comment-content">
                    <span class="fa fa-star star-active mx-1"></span>
                    <span class="fa fa-star star-active mx-1"></span>
                    <span class="fa fa-star star-active mx-1"></span>
                    <span class="fa fa-star star-active mx-1"></span>
                    <span class="fa fa-star star-inactive mx-1"></span>
                  </div>
                </div>
              </div>

              <div class="be-comment">
                <div class="be-img-comment">
                  <a href="#">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar2.png"
                      alt=""
                      class="be-ava-comment"
                    />
                  </a>
                </div>
                <div class="be-comment-content">
                  <span class="be-comment-name">
                    <a href="">Phoenix, the Creative Studio</a>
                  </span>
                  <span class="be-comment-time">
                    <i class="fa fa-clock-o"></i>
                    15 janeiro, 2022 pelas 19:30h
                  </span>
                  <p class="be-comment-text">
                    Nunc ornare sed dolor sed mattis. In scelerisque dui a arcu
                    mattis, at maximus eros commodo. Cras magna nunc, cursus
                    lobortis luctus at, sollicitudin vel neque. Duis eleifend
                    lorem non ant. Proin ut ornare lectus, vel eleifend est.
                    Fusce hendrerit dui in turpis tristique blandit.
                  </p>
                </div>
              </div>
              <div class="be-comment">
                <div class="be-img-comment">
                  <a href="#">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar3.png"
                      alt=""
                      class="be-ava-comment"
                    />
                  </a>
                </div>
                <div class="be-comment-content">
                  <span class="be-comment-name">
                    <a href="">Cüneyt ŞEN</a>
                  </span>
                  <span class="be-comment-time">
                    <i class="fa fa-clock-o"></i>
                    27 janeiro, 2022 pelas 13h
                  </span>
                  <p class="be-comment-text">
                    Cras magna nunc, cursus lobortis luctus at, sollicitudin vel
                    neque. Duis eleifend lorem non ant
                  </p>
                </div>
              </div>
            </div>
          </div>
        </b-card>
      </b-container>
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
    </body>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "filmeDetalhes",
  data() {
    return {
      actualFilme: [],
      status: "Marcar como visto",
    };
  },
  computed: {
    ...mapGetters(["getFilmes", "setVisitingFilme"]),
  },
  methods: {
    ...mapMutations(["SET_ACTUAL_FILME"]),
    checkWhichFilme() {
      this.actualFilme.push(
        this.getFilmes.find((filme) => filme.title == this.setVisitingFilme)
      );
      console.log(this.setVisitingFilme);
    },
  },
  created() {
    this.checkWhichFilme();
  },
};
</script>

<style scoped>
.tituloquiz {
  background: linear-gradient(to left, #ffb703 10%, #ed6a5a 30%);
  clip-path: polygon(0 0, calc(100% - 50px) 0, 70% 200%, 0% 100%);
  width: 100%;
  height: 130px;
  font-family: Rubik;
  padding-top: 10px;
  padding-left: 75px;
  font-size: 28px;
  color: white;
}
.subtitulo {
  font-size: 15px;
  font-family: Rubik light;
  padding-right: 100px;
}

.card {
  min-width: 100%;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 5px 5px 10px gray;
}

.card.comentarios {
  box-shadow: 5px 5px 10px #ffb72b;
}
.card-q {
  min-width: 80%;
}

.card-img,
.card-img-top {
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
  height: 400px;
}

.quiz {
  color: #023047;
  font-family: Rubik light;
}

.tituloquiz {
  background: linear-gradient(to left, #ffb703 10%, #ed6a5a 30%);
  clip-path: polygon(0 0, calc(100% - 50px) 0, 70% 200%, 0% 100%);
  width: 100%;
  height: 130px;
  font-family: Rubik;
  padding-top: 10px;
  padding-left: 75px;
  font-size: 28px;
  color: white;
}
.subtitulo {
  font-size: 15px;
  font-family: Rubik light;
  padding-right: 100px;
}

.comentarios {
  border-radius: 1px;
}
.comentariotitulo {
  height: 50px;
  width: 20%;
  color: #fff;
  padding-left: 30px;
  padding-top: 12px;
  background: linear-gradient(to left, #ffb703 10%, #ed6a5a 30%);
  clip-path: polygon(0 0, calc(100% - 50px) 0, 100% 100%, 0% 100%);
}

.be-comment-block {
  margin-bottom: 50px !important;
  border: 1px solid #edeff2;
  border-radius: 2px;
  padding: 50px 70px;
  border: 1px solid #ffffff;
}

.comments-title {
  font-size: 16px;
  color: #262626;
  margin-bottom: 15px;
  font-family: "Rubik";
}

.be-img-comment {
  width: 60px;
  height: 60px;
  float: left;
  margin-bottom: 15px;
}

.be-ava-comment {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}

.be-comment-content {
  margin-left: 80px;
}

.be-comment-content span {
  display: inline-block;
  width: 49%;
  margin-bottom: 15px;
}

.be-comment-name {
  font-size: 13px;
  font-family: "Rubik";
}

.be-comment-content a {
  color: #023047;
}

.be-comment-content span {
  display: inline-block;
  width: 49%;
  margin-bottom: 15px;
}

.be-comment-time {
  text-align: right;
}

.be-comment-time {
  font-size: 11px;
  color: #023047;
}

.be-comment-text {
  font-size: 13px;
  font-family: "Rubik light";
  line-height: 18px;
  color: #023047;
  display: block;
  background: #f6f6f7;
  border: 1px solid #edeff2;
  padding: 15px 20px 20px 20px;
}

.form-group .form-input {
  font-size: 13px;
  line-height: 50px;
  font-weight: 400;
  color: #b4b7c1;
  width: 100%;
  height: 50px;
  padding-left: 20px;
  padding-right: 20px;
  border: 1px solid #edeff2;
  border-radius: 3px;
}

.form-group.fl_icon .form-input {
  padding-left: 70px;
}

.form-group textarea.form-input {
  height: 100px;
  width: 880px;
}

.star-active {
  color: #ed6a5a;
}

.star-inactive {
  color: #ed6a5a;
  opacity: 50%;
}
</style>
