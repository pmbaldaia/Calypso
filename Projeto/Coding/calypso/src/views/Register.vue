<template>
  <div class="container">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.0-beta2/css/bootstrap.min.css"
    />
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div class="card my-5">
          <form
            class="card-body cardbody-color p-lg-5"
            @submit.prevent="register"
          >
            <div class="text-center">
              <img
                src="https://cdn.pixabay.com/photo/2016/08/31/11/54/user-1633249_1280.png"
                class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                width="130px"
              />
            </div>

            <div class="mb-3">
              <input
                type="text"
                v-model="form.username"
                required
                id="txtUsername"
                class="form-control"
                aria-describedby="emailHelp"
                placeholder="Utilizador"
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                v-model="form.email"
                required
                id="txtEmail"
                class="form-control"
                aria-describedby="emailHelp"
                placeholder="Email"
              />
            </div>
            <div class="mb-3">
              <input
                type="password"
                id="txtPassword"
                v-model="form.password"
                required
                class="form-control"
                placeholder="Password"
              />
            </div>
            <div class="mb-3">
              <input
                type="password"
                id="txtCheckPassword"
                v-model="form.checkpassword"
                required
                class="form-control"
                placeholder="Confirme a Password"
              />
            </div>
            <div class="text-center">
              <button
                type="submit"
                value="REGISTER"
                class="btn btn-color px-5 mb-5 w-100"
              >
                Registar
              </button>
            </div>
            <div id="emailHelp" class="form-text text-center mb-5 text-dark">
              Já tem conta?
              <router-link :to="{ name: 'login' }"
                >Inicie Sessão aqui</router-link
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Register",
  data() {
    return {
      form: {
        username: "",
        password: "",
        checkpassword: "",
        email: "",
        type: "regular",
        gifts: 0,
        location: "",
      },
    };
  },
  computed: {
    ...mapGetters(["isUsernameAvailable"]),
  },
  methods: {
    register() {
      if (this.isUsernameAvailable(this.form.username)) {
        this.SET_NEW_USER(this.form);
        this.$router.push({ name: "login" });
      } else {
        alert("Utilizador já existente! Tente novamente!");
      }
    },
    ...mapMutations(["SET_NEW_USER"]),
  },
};
</script>

<style>
.btn-color {
  background-color: #0e1c36;
  color: #fff;
}

.profile-image-pic {
  height: 200px;
  width: 200px;
  object-fit: cover;
}

.cardbody-color {
  background-color: #ebf2fa;
}

a {
  text-decoration: none;
}
</style>
