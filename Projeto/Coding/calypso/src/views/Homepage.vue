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
            <router-link class="link active" :to="{ name: '' }"
              >INÍCIO</router-link
            >
          </li>
          <li>
            <router-link class="link" :to="{ name: '' }">QUIZZES</router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name: 'filmsCatalogo' }"
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
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        fluid="true"
        controls
        indicators
        background="gray"
        style="text-shadow: 1px 1px 2px #333"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              src="@/assets/images/007slide.jpg"
              alt="image slot"
            />
          </template>
          <h1 style="font-family: Rubik; font-size: 22px">Quizz James Bond</h1>
          <p style="font-family: Rubik light">
            Teste os seus conhecimentos 007
          </p></b-carousel-slide
        >

        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              src="@/assets/images/notimetodieslide.jpg"
              alt="image slot"
            />
          </template>
          <h1 style="font-family: Rubik; font-size: 22px">Filme em Destaque</h1>
          <p style="font-family: Rubik light">
            'No time to die' ou 'Sem tempo para morrer'
          </p>
        </b-carousel-slide>
        <b-carousel-slide>
          <template #img>
            <img
              class="d-block img-fluid w-100"
              src="@/assets/images/lacasadepapelslide1.webp"
              alt="image slot"
            />
          </template>
          <h1 style="font-family: Rubik; font-size: 22px">Série em Destaque</h1>
          <p style="font-family: Rubik light">
            'La Casa de Papel' ou 'Casa de Papel'
          </p></b-carousel-slide
        >
      </b-carousel>
      <br />
      <div class="homepage">
        <br />
        <h2>QUIZZES</h2>
        <p>Teste o seu conhecimento</p>
      </div>
      <br /><br /><br />
      <div class="homepage">
        <br />
        <h2>FILMES</h2>
        <p>Veja os novos filmes</p>
      </div>
      <br /><br /><br />
      <div class="homepage">
        <br />
        <h2>SÉRIES</h2>
        <p>Veja as novas séries</p>
      </div>
      <br /><br /><br />
      <div>
        <!-- Footer -->
        <footer class="page-footer font-small blue pt-4">
          <!-- Footer Links -->
          <div class="container-fluid text-center text-md-left">
            <!-- Grid row -->
            <div class="row">
              <!-- Grid column -->
              <div class="col-md-6 mt-md-0 mt-3">
                <!-- Content -->
                <h5 class="text-uppercase">Footer Content</h5>
                <p>
                  Here you can use rows and columns to organize your footer
                  content.
                </p>
              </div>
              <!-- Grid column -->

              <hr class="clearfix w-100 d-md-none pb-3" />

              <!-- Grid column -->
              <div class="col-md-3 mb-md-0 mb-3">
                <!-- Links -->
                <h5 class="text-uppercase">Links</h5>

                <ul class="list-unstyled">
                  <li>
                    <a href="#!">Link 1</a>
                  </li>
                  <li>
                    <a href="#!">Link 2</a>
                  </li>
                  <li>
                    <a href="#!">Link 3</a>
                  </li>
                  <li>
                    <a href="#!">Link 4</a>
                  </li>
                </ul>
              </div>
              <!-- Grid column -->

              <!-- Grid column -->
              <div class="col-md-3 mb-md-0 mb-3">
                <!-- Links -->
                <h5 class="text-uppercase">Links</h5>

                <ul class="list-unstyled">
                  <li>
                    <a href="#!">Link 1</a>
                  </li>
                  <li>
                    <a href="#!">Link 2</a>
                  </li>
                  <li>
                    <a href="#!">Link 3</a>
                  </li>
                  <li>
                    <a href="#!">Link 4</a>
                  </li>
                </ul>
              </div>
              <!-- Grid column -->
            </div>
            <!-- Grid row -->
          </div>
          <!-- Footer Links -->

          <!-- Copyright -->
          <div class="footer-copyright text-center py-3">
            © 2022 Copyright CALYPSO
          </div>
          <!-- Copyright -->
        </footer>
        <!-- Footer -->
      </div>
    </body>
  </div>
</template>

<style>
div .homepage {
  height: 100px;
  width: 22%;
  font-family: Rubik;
  color: white;
  padding-bottom: 8%;
  background: linear-gradient(to left, #ffb703 10%, #ed6a5a 30%);
  clip-path: polygon(0 0, calc(100% - 50px) 0, 100% 100%, 0% 100%);
}

div h2,
p {
  margin-left: 22px;
}
</style>
