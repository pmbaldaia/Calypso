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
    </body>
  </div>
</template>
