<template>
  <header>
    <nav>
      <div class="branding">
        <h1>CALYPSO</h1>
      </div>
      <link
        href="https://fonts.googleapis.com/css?family=Rubik:500,500i"
        rel="stylesheet"
      />
      <ul class="navigation">
        <li>
          <router-link class="link active" :to="{ name: '' }"
            >INÍCIO</router-link
          >
        </li>
        <li>
          <router-link class="link" :to="{ name: '' }">QUIZZES</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: '' }">FILMES</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: '' }">SÉRIES</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: 'login' }"
            >LOGIN<img class="icon-login" src="@/assets/icons/login.png"
          /></router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
<style>
header {
  z-index: 99;
  width: 100%;
  position: fixed;
  transition: 0.5s ease all;
  color: #023047;
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
li {
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
li a:hover {
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
</style>
