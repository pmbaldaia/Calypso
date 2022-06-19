<template>
  <div id="app">
    <NavBar />
    <h1 class="headers">Registe-se aqui</h1>
    <b-container class="login">
      <b-avatar icon="people-fill" size="6em"></b-avatar>
      <b-form @submit.prevent="register">
        <b-form-group id="input-group-1" label="Utilizador" label-for="input-1">
          <b-form-input
            type="text"
            v-model="form.username"
            id="txtUsername"
            placeholder="Utilizador"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Email" label-for="input-2">
          <b-form-input
            type="text"
            v-model="form.email"
            id="txtEmail"
            placeholder="Email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Password" label-for="input-2">
          <b-form-input
            type="password"
            id="txtPassword"
            v-model="form.password"
            placeholder="Password"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Confirmar Password"
          label-for="input-2"
        >
          <b-form-input
            type="password"
            id="txtCheckPassword"
            v-model="form.checkpassword"
            placeholder="Confirmar Password"
            required
          ></b-form-input>
        </b-form-group>

        <br />
        <b-button aria-label="register" type="submit" class="buttonsForm"
          >Registar-se</b-button
        >
        <b-button aria-label="reset" type="reset" class="buttonsForm"
          >Apagar Formulário</b-button
        >
        <b-button aria-label="login" href="login" class="buttonsForm"
          >Já tem conta? Clique aqui</b-button
        ></b-form
      >
    </b-container>
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Register",
  data() {
    return {
      form: {
        username: "",
        email: "",
        password: "",
        checkpassword: "",
        type: "user",
      },
    };
  },
  components: {
    NavBar,
    Footer,
  },
  computed: {
    ...mapGetters(["isUsernameAvailable", "getLoggedUser"]),
  },
  methods: {
    register() {
      if (this.isUsernameAvailable(this.form.username)) {
        this.SET_NEW_USER(this.form);
        this.$router.push({ name: "Login" });
        alert("Utilizador criado com sucesso");
      } else {
        alert("Utilizador já existente! Tente novamente!");
      }
    },
    ...mapMutations(["SET_NEW_USER"]),
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
