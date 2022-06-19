<template>
  <div class="landing">
    <NavBar />
    <Landing />
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Landing from "@/components/Landing.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    Landing,
    Footer,
  },
};
</script>
