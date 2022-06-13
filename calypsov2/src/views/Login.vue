<template>
  <div id="app">
    <h2 class="headers">Iniciar Sessão</h2>
    <b-container class="login">
      <b-avatar width="640" height="360" size="6em"></b-avatar>
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="input-group-1" label="Utilizador" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.username"
            type="username"
            placeholder="Utilizador"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Password" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.password"
            type="password"
            placeholder="Password"
            required
          ></b-form-input>
        </b-form-group>
        <br />
        <b-button type="submit" variant="primary">Iniciar sessão</b-button>
        <b-button href="register" variant="warning"
          >Não tem conta? Crie uma aqui</b-button
        ></b-form
      ><br />
      <b-link href="Register.vue"></b-link>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
        checked: [],
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      this.form.usernma = "";
      this.form.password = "";
      this.form.checked = [];
    },
  },
};
</script>

<style>
.login {
  background-color: rgb(235, 242, 250, 0.4);
  border-radius: 10%;
}
</style>
