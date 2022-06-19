<template>
  <div id="app">
    <Navbar />
    <h1 class="headers">A sua conta</h1>
    <Profile />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Navbar from "@/components/NavBar.vue";
import Profile from "../components/Profile.vue";
export default {
  components: {
    Navbar,
    Profile,
  },
  computed: {
    ...mapGetters(["getLoggedUser"]),
  },
  methods: {
    ...mapMutations(["SET_LOGOUT"]),
    logout() {
      this.SET_LOGOUT();
      this.$router.push({ name: "Login" });
    },
  },
};
</script>
