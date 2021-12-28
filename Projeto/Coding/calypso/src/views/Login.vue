<template>
  <div class="container">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.0-beta2/css/bootstrap.min.css"
    />
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div class="card my-5">
          <form class="card-body cardbody-color p-lg-5" @submit.prevent="login">
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
                id="txtUsername"
                v-model="username"
                required
                class="form-control"
                aria-describedby="emailHelp"
                placeholder="Utilizador"
              />
            </div>
            <div class="mb-3">
              <input
                type="password"
                id="txtPassword"
                v-model="password"
                required
                class="form-control"
                placeholder="Password"
              />
            </div>
            <div class="text-center">
              <button
                type="submit"
                value="LOGIN"
                class="btn btn-color px-5 mb-5 w-100"
              >
                Iniciar Sessão
              </button>
            </div>
            <div id="emailHelp" class="form-text text-center mb-5 text-dark">
              Não tem conta?
              <router-link :to="{ name: 'register' }"
                >Crie aqui uma!</router-link
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
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
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
    ...mapGetters(["isUser"]),
  },
  methods: {
    login() {
      if (this.isUser(this.username, this.password)) {
        this.SET_LOGGED_USER(this.username);
        this.$router.push({ name: "quizzes" });
      } else {
        alert("Nenhum utilizador encontrado, tente novamente!");
      }
    },
    ...mapMutations(["SET_LOGGED_USER"]),
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
