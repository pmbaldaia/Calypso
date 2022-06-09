<template>
  <div id="app">
    <nav-bar-comp />
    <router-view />
    <p></p>
    <Footer />
  </div>
</template>
<script>
import NavBarComp from "./components/NavBarComp.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    NavBarComp,
    Footer,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

template {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
}
body {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
}

#app {
  margin: 0;
  padding: 0;
  font-family: Rubik lighter;
  text-align: center;
  color: #023047;
}
.headers {
  width: 32%;
  color: white;
  background: linear-gradient(to left, #ffb703 10%, #ed6a5a 30%);
  clip-path: polygon(0 0, calc(100% - 50px) 0, 100% 100%, 0% 100%);
}
</style>
