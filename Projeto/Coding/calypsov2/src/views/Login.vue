<template>
  <div id="app">
    <NavBar />
    <h1 class="headers">Iniciar Sessão</h1>
    <b-container class="login">
      <b-avatar width="640" height="360" size="6em"></b-avatar>
      <b-form @submit.prevent="login">
        <b-form-group id="input-group-1" label="Utilizador" label-for="input-1">
          <b-form-input
            type="text"
            id="txtUsername"
            v-model="username"
            placeholder="Utilizador"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Password" label-for="input-2">
          <b-form-input
            type="password"
            id="txtPassword"
            v-model="password"
            placeholder="Password"
            required
          ></b-form-input>
        </b-form-group>
        <br />
        <b-button
          aria-label="login"
          type="submit"
          value="LOGIN"
          class="buttonsForm"
          >Iniciar sessão</b-button
        >
        <b-button aria-label="register" href="register" class="buttonsForm"
          >Não tem conta? Crie uma aqui</b-button
        ></b-form
      ><br />
      <b-link aria-label="register" href="Register.vue"></b-link>
    </b-container>
    <Footer />
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  components: {
    NavBar,
    Footer,
  },
  mounted() {
    let externalScript = document.createElement("script");
    externalScript.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.0-beta2/js/bootstrap.min.js"
    );
    document.head.appendChild(externalScript);
  },
  computed: {
    ...mapGetters(["isUser", "getLoggedUser"]),
  },
  methods: {
    login() {
      if (this.isUser(this.username, this.password)) {
        this.SET_LOGGED_USER(this.username);
        this.$router.push({ name: "Profile" });
      } else {
        alert(
          "Nenhum utilizador encontrado/password incorreta! Tente novamente!"
        );
      }
    },
    ...mapMutations(["SET_LOGGED_USER"]),
  },
};
</script>

<style>
.login {
  background-color: rgb(235, 242, 250, 0.4);
  border-radius: 10%;
}

.buttonsForm {
  background-color: #023047;
  margin-right: 10px;
}
</style>
