<template>
  <header>
    <nav>
      <div class="branding">
        <img src="@/assets/logo.png" />
      </div>
      <ul class="navigation">
        <li>
          <router-link class="link" :to="{ name: '' }">INÍCIO</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: '' }">QUIZZES</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: '' }">FILMES</router-link>
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
    <div>
      <b-container id="carouselRow">
        <b-row>
          <b-col></b-col>
          <b-col>
            <b-carousel
              id="carousel-1"
              v-model="slide"
              :interval="4000"
              indicators
              background="#ababab"
              img-width="2048"
              img-height="960"
              style="text-shadow: 1px 1px 2px #333"
              @sliding-start="onSlideStart"
              @sliding-end="onSlideEnd"
            >
              <b-carousel-slide img-src="https://picsum.photos/1024/480">
                <h1>slide1</h1>
              </b-carousel-slide>

              <b-carousel-slide img-src="https://picsum.photos/1024/480">
                <h1>slide2</h1>
              </b-carousel-slide>

              <b-carousel-slide img-src="https://picsum.photos/1024/480">
                <h1>slide3</h1>
              </b-carousel-slide>

              <b-carousel-slide img-src="https://picsum.photos/1024/480">
                <h1>slide4</h1>
              </b-carousel-slide>
            </b-carousel>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>
header {
  z-index: 99;
  width: 100%;
  position: fixed;
  transition: 0.5s ease all;
  color: #fff;
}

nav {
  display: flex;
  flex-direction: row;
  padding: 12px 0;
  transition: 0.5s ease all;
  width: 90%;
  margin: 0 auto;
}

ul,
.link {
  font-weight: 500;
  color: #000;
  list-style: none;
  text-decoration: none;
}
li {
  text-transform: uppercase;
  padding: 16px;
  margin-left: 16px;
}
.link {
  font-size: 14px;
  transition: 0.5s ease all;
  padding-bottom: 4px;
  border-bottom: 1px solid transparent;
}
.branding {
  display: flex;
  align-items: center;
}
img {
  width: 50px;
  transition: 0.5s ease all;
}

.navigation {
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
}

.icon {
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 24px;
  height: 100%;
}
i {
  cursor: pointer;
  font-size: 24px;
  transition: 0.8s ease all;
}
.icon-login {
  width: 15px;
  height: 15px;
}
.icon-active {
  transform: rotate(180deg);
}
</style>
