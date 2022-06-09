<template>
  <div id="app">
    <b-button v-b-toggle.sidebar-no-header variant="outline-primary"
      >Menu Admin</b-button
    >
    <b-sidebar
      id="sidebar-no-header"
      aria-labelledby="sidebar-no-header-title"
      no-header
      shadow
    >
      <template #default="{ hide }">
        <div class="p-3">
          <h4 id="sidebar-no-header-title">ADMIN MENU</h4>
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item active @click="hide">Editar Perfil</b-nav-item>
              <b-nav-item href="/">Utilizadores</b-nav-item>
              <b-nav-item href="" @click="hide">Quizzes</b-nav-item>
              <b-nav-item href="" @click="hide">Filmes</b-nav-item>
              <b-nav-item href="" @click="hide">Séries</b-nav-item>
            </b-nav>
          </nav>
          <b-button variant="warning" block @click="hide">Fechar Menu</b-button>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style></style>
