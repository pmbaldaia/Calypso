<template>
  <div id="app">
    <router-view />
    <p></p>
  </div>
</template>
<script>
export default {};
</script>

<style>
* {
  box-sizing: border-box;
}

template {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
}
body {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
}

#app {
  margin: 0;
  padding: 0;
  font-family: Rubik lighter;
  text-align: center;
  color: #023047;
}
.headers {
  font-size: 1.5em;
  width: 32%;
  color: white;
  background: linear-gradient(to left, #ffb703 10%, #ed6a5a 30%);
  clip-path: polygon(0 0, calc(100% - 50px) 0, 100% 100%, 0% 100%);
}

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
