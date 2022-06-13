<template>
  <div class="marginbottom">
    <b-dropdown
      text="Categorias"
      variant="outline primary"
      class="m-2 buttonpositions"
    >
      <b-dropdown-item href="#">Todos</b-dropdown-item>
      <b-dropdown-item href="#">Ação</b-dropdown-item>
      <b-dropdown-item href="#">Comédia</b-dropdown-item>
      <b-dropdown-item href="#">Romance</b-dropdown-item>
      <b-dropdown-item href="#">Terror</b-dropdown-item>
      <b-dropdown-item href="#">Thriller</b-dropdown-item>
    </b-dropdown>

    <b-dropdown
      text="Ano"
      variant="outline primary"
      class="m-2 buttonpositions1"
    >
      <b-dropdown-item href="#">Todos</b-dropdown-item>
      <b-dropdown-item href="#">2022</b-dropdown-item>
      <b-dropdown-item href="#">2021</b-dropdown-item>
      <b-dropdown-item href="#">2020</b-dropdown-item>
      <b-dropdown-item href="#">2019</b-dropdown-item>
      <b-dropdown-item href="#">2018</b-dropdown-item>
    </b-dropdown>

    <b-button
      size="sm-3"
      variant="outline primary"
      class="m-2 searchposition"
      type="submit"
      >Search <b-icon-search
    /></b-button>
  </div>
</template>

<script>
export default {};
</script>

<style>
.btn-outline {
  color: #ed6a5a;
  background: white;
  border: 1px solid #ed6a5a;
}

.buttonpositions {
  position: absolute;
  left: 3%;
}

.buttonpositions1 {
  position: absolute;
  left: 13%;
}

.searchposition {
  position: absolute;
  right: 3%;
}
.marginbottom {
  padding-bottom: 60px;
}
</style>
