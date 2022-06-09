<!-- Use preprocessors via the lang attribute! e.g. <template lang="pug"> -->
<template>
  <b-container fluid>
    <b-row>
      <b-col offset-md="2">
        <hr class="my-4" />
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-col cols="6" md="2" class="my-4">
        <b-img-lazy
          thumbnail
          rounded="circle"
          src="https://picsum.photos/250/250/?image=33"
          alt="Image 1"
        >
        </b-img-lazy>
        <h3>ADMIN</h3>
      </b-col>

      <b-col cols="12" md="10">
        <b-tabs content-class="mt-3" card id="app">
          <b-tab title="Info" active>
            <b-list-group>
              <b-list-group-item>
                <span class="p-1 mr-3"> <b-avatar icon="person" /></span>
                John Doe
              </b-list-group-item>
              <b-list-group-item>
                <span class="p-1 mr-3"> <b-avatar icon="phone" /></span>
                +1 123 456 7891
              </b-list-group-item>
              <b-list-group-item>
                <span class="p-1 mr-3"> <b-avatar icon="at" /></span>
                john@doe.test
              </b-list-group-item>
            </b-list-group>
            <br />
            <b-button variant="outline-danger" @click="deleteAccount">
              Delete Account
            </b-button>
          </b-tab>
          <b-tab title="Tab 2">
            <b-list-group>
              <b-list-group-item>Contents of TAB 2</b-list-group-item>
            </b-list-group>
          </b-tab>
          <b-tab title="Tab 3" lazy>
            <b-list-group>
              <b-list-group-item>Contents of TAB 3</b-list-group-item>
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
  methods: {
    deleteAccount() {
      alert("Account Deleted");
    },
  },
};
</script>
