<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
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
  width: 90%;
  height: 90%;
  left: 5%;
}

.carousel-indicators li {
  background-color: #ffb703;
}

.carousel img {
  width: 1024px;
  height: 680px;
  opacity: 70%;
}
</style>
