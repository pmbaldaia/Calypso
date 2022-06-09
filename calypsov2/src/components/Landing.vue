<template>
  <div class="home">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      fluid="true"
      controls
      indicators
      background="#023047"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            src="https://cdn.pixabay.com/photo/2021/12/22/10/59/tunnel-6887276_960_720.jpg"
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
            src="https://cdn.pixabay.com/photo/2022/05/17/15/59/cat-7203072_960_720.jpg"
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
            style=""
            class="d-block img-fluid w-100"
            src="https://cdn.pixabay.com/photo/2021/07/15/21/25/chaka-salt-lake-6469432_960_720.jpg"
          />
        </template>
        <h1 style="font-family: Rubik; font-size: 22px">Série em Destaque</h1>
        <p style="font-family: Rubik light">
          'La Casa de Papel' ou 'Casa de Papel'
        </p></b-carousel-slide
      >
    </b-carousel>
    <br />
    <h2 class="headers">Quizzes</h2>
    <h2 class="headers">Filmes</h2>
    <h2 class="headers">Séries</h2>
  </div>
</template>

<script>
export default {
  name: "landing",
};
</script>

<style>
.home {
  font-family: Rubik ligher;
}

.carousel {
  width: 100%;
  height: 50%;
}

.carousel-indicators li {
  background-color: #ffb703;
  align-content: center;
}

.carousel img {
  width: 10px;
  height: 620px;
  opacity: 70%;
}
</style>
