<template>
  <div id="app">
    <div id="nav">
      <h1><a href="/" class="logo">CALYPSO</a></h1>
      <router-link to="/" class="navnames">INÍCIO</router-link>
      <router-link to="/quizzes" class="navnames">QUIZZES</router-link>
      <router-link to="/movies" class="navnames">FILMES</router-link>
      <router-link to="/series" class="navnames">SÉRIES</router-link>
      <router-link to="/login" class="navnames"
        ><b-button variant="primary" style="font-size: 13px">
          <b-icon icon="person-fill"></b-icon> LOGIN/REGISTO
        </b-button></router-link
      >
      <!-- <router-link to="/logout" class="navnames">
        <b-button variant="outline-danger">
          <b-icon icon="power" aria-hidden="true"></b-icon> Logout
        </b-button></router-link
      > -->
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBarComp",
};
</script>

<style>
/*NavigationBar*/
.logo {
  float: left;
  font-family: Rubik;
  font-weight: bold;
  font-size: 30px;
  padding-left: 30px;
}
#nav {
  padding: 25px;
  padding-bottom: 25px;
  width: 100%;
  height: 100%;
  text-align: right;
  font-size: 15px;
}
.navnames {
  padding-right: 20px;
}

#nav a {
  color: black;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  font-weight: bold;
  color: #023047;
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-color: #ed6a5a;
}

.btn-primary {
  background: transparent !important;
  color: #023047 !important;
  border: 1px solid #ed6a5a !important;
}
</style>
