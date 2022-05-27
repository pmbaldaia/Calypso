<template>
  <div class="container">
    <div class="grid">
      <div class="row login">
        <div class="col-md-6 offset-md-3">
          <div class="card my-5">
            <form class="card-body cardbody-color p-lg-5">
              <div class="text-center">
                <h5>Registe-se aqui</h5>
                <img
                  src="https://cdn.pixabay.com/photo/2017/11/10/05/46/group-2935521_960_720.png"
                  alt=""
                  class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                  width="80px"
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  required
                  class="form-control"
                  placeholder="Utilizador"
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  required
                  class="form-control"
                  placeholder="Email"
                />
              </div>
              <div class="mb-3">
                <input
                  type="password"
                  required
                  class="form-control"
                  placeholder="Password"
                />
              </div>
              <div class="text-center">
                <button
                  style="background-color: #0e1c36; color: #fff"
                  type="submit"
                  value="LOGIN"
                  class="btn px-5 mb-5 w-100"
                >
                  Registar
                </button>
              </div>
              <div class="form-text text-center mb-3 refs">
                Já tem conta?
                <router-link :to="'/login'">Inicie sessão aqui</router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPassword: false,
      password: null,
    };
  },
  computed: {
    buttonLabel() {
      return this.showPassword ? "Hide" : "Show";
    },
  },
  methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>

<style>
.grid {
  background: linear-gradient(
    -8deg,
    rgba(235, 242, 250, 1) 10%,
    rgba(235, 242, 250, 0.1) 90%
  );
  border-radius: 2em;
}
.container {
  padding-bottom: 30px;
}
.profile-image-pic {
  height: 200px;
  width: 200px;
}
.cardbody-color {
  background-color: #ebf2fa;
}
.refs {
  font-weight: bold;
  font-size: auto;
  color: #023047;
}
</style>
