<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
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
nav {
  font-family: "Rubik";
  color: #023047;
  display: flex;
  flex-direction: row;
  padding: 12px 0;
  transition: 0.5s ease all;
  width: 90%;
  margin: 0 auto;
}

ul,
.link {
  font-weight: 500;
  color: #023047;
  list-style: none;
  text-decoration: none;
}

ul li {
  text-transform: uppercase;
  padding: 16px;
  margin-left: 16px;
}
.link {
  font-size: 14px;
  transition: 0.5s ease all;
  padding-bottom: 4px;
  border-bottom: 1px solid transparent;
}
.active {
  border-bottom: #ac3931 solid 1px;
}
.branding {
  font-family: Rubik;
  display: flex;
  align-items: center;
}
img {
  width: 50px;
  transition: 0.5s ease all;
}

.navigation {
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
}

.icon-login {
  width: 15px;
  height: 15px;
}
.carousel {
  width: 100%;
  height: 50%; /*
  margin-left: 5%; */
}

.carousel-indicators li {
  background-color: #ffb703;
}

.carousel img {
  width: 10px;
  height: 620px;
  opacity: 70%;
}

/*FOOTER*/
li {
  color: white;
  font-family: Rubik;
}
footer {
  font-family: Rubik;
  background: linear-gradient(-8deg, #ffb703 40%, #ed6a5a 40%);
  color: white;
}

footer a {
  font-family: Rubik;
  color: #fff;
  font-size: 12px;
  transition-duration: 0.2s;
}

.copy {
  font-size: 12px;
  padding: 10px;
  color: #023047;
}

.footer-middle {
  padding-top: 2em;
  color: white;
}

ul.social-network li {
  display: inline;
  margin: 0 5px;
}
</style>
