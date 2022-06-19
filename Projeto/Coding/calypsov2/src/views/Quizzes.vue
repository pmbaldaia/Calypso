<template>
  <div>
    <NavBar />
    <h1 class="headers">Quizzes</h1>

    <Footer />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    NavBar,
    Footer,
  },
  computed: {
    ...mapGetters(["getLoggedUser"]),
  },
};
</script>
