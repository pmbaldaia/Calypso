<template>
  <div id="app">
    <nav-bar-comp />
    <router-view />
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
  font-family: Rubik lighter;
  text-align: center;
  color: #023047;
}
</style>
