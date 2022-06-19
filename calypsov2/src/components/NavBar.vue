<template>
  <div id="app">
    <div id="nav">
      <h1><a href="/" class="logo">CALYPSO</a></h1>
      <router-link to="/" class="navnames">INÍCIO</router-link>
      <router-link to="/quizzes" class="navnames">QUIZZES</router-link>
      <router-link to="/movies" class="navnames">FILMES</router-link>
      <router-link to="/series" class="navnames">SÉRIES</router-link>
      <span v-if="getLoggedUser != null">
        <router-link class="navnames" :to="{ name: 'Profile' }"
          ><b-icon icon="house-door"></b-icon>
          <span style="text-transform: uppercase">
            {{ getLoggedUser.username }}
          </span></router-link
        >
        <b-button variant="outline-info" @click="logout">
          <b-icon icon="door-closed"></b-icon>
          Logout
        </b-button>
      </span>
      <span v-else>
        <router-link to="/login" class="navnames"
          ><span>
            <b-icon icon="person-fill"></b-icon> LOGIN/REGISTO
          </span></router-link
        >
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "NavBar",
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
