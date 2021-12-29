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
          <router-link class="link active" :to="{ name: 'home' }"
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
