<template>
  <div id="app">
    <div>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide
          caption="First slide"
          text="Nulla vitae elit libero, a pharetra augue mollis interdum."
          img-src="https://picsum.photos/1024/480/?image=52"
        ></b-carousel-slide>

        <b-carousel-slide
          caption="First slide"
          text="Nulla vitae elit libero, a pharetra augue mollis interdum."
          img-src="https://picsum.photos/1024/480/?image=52"
        ></b-carousel-slide
        ><b-carousel-slide
          caption="First slide"
          text="Nulla vitae elit libero, a pharetra augue mollis interdum."
          img-src="https://picsum.photos/1024/480/?image=52"
        ></b-carousel-slide>

        <b-carousel-slide
          caption="First slide"
          text="Nulla vitae elit libero, a pharetra augue mollis interdum."
          img-src="https://picsum.photos/1024/480/?image=52"
        ></b-carousel-slide>
      </b-carousel>
    </div>
    <br />
    <h2 class="headers">Quizzes</h2>
    <h2 class="headers">Filmes</h2>
    <h2 class="headers">Séries</h2>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "landing",
  computed: {
    ...mapGetters(["getLoggedUser"]),
  },
};
</script>

<style>
.home {
  font-family: Rubik ligher;
}

.carousel-inner img {
  width: 100%;
  height: 100%;
}
</style>
