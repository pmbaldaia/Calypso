<template>
  <div id="app">
    <h2 class="headers">Registe-se aqui</h2>
    <b-container class="login">
      <b-avatar icon="people-fill" size="6em"></b-avatar>
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

        <b-form-group id="input-group-2" label="Email" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.email"
            type="text"
            placeholder="Email"
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

        <b-form-group
          id="input-group-2"
          label="Confirmar Password"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="form.confirmPassword"
            type="password"
            placeholder="Confirmar Password"
            required
          ></b-form-input>
        </b-form-group>

        <br />
        <b-button type="submit" variant="primary">Registar-se</b-button>
        <b-button type="reset" variant="danger">Apagar Formulário</b-button>
        <b-button href="login" variant="warning"
          >Já tem conta? Clique aqui</b-button
        ></b-form
      >
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
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
      this.form.username = "";
      this.form.email = "";
      this.form.password = "";
      this.form.confirmPassword = "";
      //botão reset
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style>
.login {
  background-color: rgb(235, 242, 250, 0.4);
  border-radius: 10%;
}
.b-button {
  margin: 10% !important;
}
</style>
