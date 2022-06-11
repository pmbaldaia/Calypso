<template>
  <b-container fluid>
    <b-row></b-row>
    <b-row align-h="center">
      <b-col cols="12" md="10">
        <b-tabs id="app">
          <b-tab title="Dados Pessoais" active title-link-class="color">
            <b-list-group>
              <b-list-group-item>
                <span class="p-1 mr-3"> <b-avatar icon="person" /></span>
                {{ username }}
              </b-list-group-item>
              <b-list-group-item>
                <span class="p-1 mr-3"> <b-avatar icon="phone" /></span>
                {{ email }}
              </b-list-group-item>
              <b-list-group-item>
                <span class="p-1 mr-3"> <b-avatar icon="lock" /></span>
                {{ password }}
              </b-list-group-item>
            </b-list-group>
            <br />
            <b-button variant="outline-primary"> Editar conta </b-button>
          </b-tab>
          <b-tab title="Avatar" lazy title-link-class="color">
            <b-list-group>
              <b-list-group-item
                ><b-col cols="6" md="2" class="my-4">
                  <b-img-lazy
                    thumbnail
                    rounded="circle"
                    src="https://picsum.photos/250/250/?image=33"
                    alt="Image 1"
                  >
                  </b-img-lazy> </b-col
              ></b-list-group-item>
            </b-list-group>
          </b-tab>
          <b-tab title="Utilizadores" lazy title-link-class="color">
            <b-list-group>
              <b-list-group-item>Utilizadores</b-list-group-item>
            </b-list-group>
          </b-tab>
          <b-tab title="Quizzes" lazy title-link-class="color">
            <b-list-group>
              <b-list-group-item>Quizzes</b-list-group-item>
            </b-list-group>
          </b-tab>
          <b-tab title="Filmes" lazy title-link-class="color">
            <b-list-group>
              <b-list-group-item>Filmes</b-list-group-item>
            </b-list-group>
          </b-tab>
          <b-tab title="Séries" lazy title-link-class="color">
            <b-list-group>
              <b-list-group-item>Séries</b-list-group-item>
            </b-list-group>
          </b-tab>
          <b-tab title="Badges" lazy title-link-class="color">
            <b-list-group>
              <b-list-group-item>Badges</b-list-group-item>
            </b-list-group>
          </b-tab>
        </b-tabs>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
.color {
  color: #023047 !important;
  background-color: rgb(255, 183, 3, 0.2) !important;
  margin-right: 2px;
}

.color.active {
  color: white !important;
  background-color: #ed6a5a !important;
  text-decoration: none;
}
</style>
