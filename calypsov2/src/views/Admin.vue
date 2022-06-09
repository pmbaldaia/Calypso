<template>
  <div id="app">
    <h2>Painel de Controlo ADMIN</h2>
    <Sidebar />
    <Profile />
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import Profile from "../components/Profile.vue";
export default {
  components: {
    Sidebar,
    Profile,
  },
};
</script>

<style></style>
