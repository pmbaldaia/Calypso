<template>
  <div>
    <b-container fluid>
      <b-row></b-row>
      <b-row align-h="center">
        <b-col cols="12" md="10">
          <b-tabs id="app">
            <b-tab title="Dados Pessoais" active title-link-class="color">
              <b-list-group>
                <b-list-group-item
                  ><b-row
                    ><b-col cols="6" md="3" class="my-4">
                      <b-img-lazy
                        thumbnail
                        rounded="circle"
                        v-bind="mainImage"
                        :src="getImageUrl(1074)"
                        alt="Avatar"
                      >
                      </b-img-lazy>
                      <b-form-file
                        v-model="file"
                        :state="Boolean(file)"
                        placeholder="Escolha uma imagem"
                      ></b-form-file></b-col
                    ><b-col>
                      <h3>Informações do Utilizador</h3>
                      <b-list-group-item>
                        <span class="p-1 mr-3">
                          <b-avatar icon="person"
                        /></span>
                        {{ getLoggedUser.username }}
                      </b-list-group-item>
                      <b-list-group-item>
                        <span class="p-1 mr-3"> <b-avatar icon="phone" /></span>
                        {{ getLoggedUser.email }}
                      </b-list-group-item>
                      <b-list-group-item>
                        <span class="p-1 mr-3"> <b-avatar icon="lock" /></span>
                        {{ getLoggedUser.password }}
                      </b-list-group-item>
                      <b-list-group-item>
                        <span class="p-1 mr-3">
                          <b-avatar icon="file-lock2"
                        /></span>
                        {{ getLoggedUser.checkpassword }}
                      </b-list-group-item>
                    </b-col></b-row
                  ></b-list-group-item
                >
              </b-list-group>
              <br />
              <b-button v-b-modal.modalData>Atualizar dados</b-button>
              <b-modal id="modalData">Teste </b-modal>
            </b-tab>
            <b-tab title="Rankings" lazy title-link-class="color">
              <b-list-group>
                <b-table :items="items"></b-table>
              </b-list-group>
            </b-tab>
            <b-tab title="Badges" lazy title-link-class="color">
              <b-list-group>
                <b-row>
                  <b-col>
                    <b-img
                      thumbnail
                      fluid
                      v-bind="mainBadges"
                      :src="getBadges(50)"
                      alt="Image 1"
                    ></b-img
                    >Terror </b-col
                  ><b-col>
                    <b-img
                      thumbnail
                      fluid
                      v-bind="mainBadges"
                      :src="getBadges(51)"
                      alt="Image 1"
                    ></b-img>
                    Comédia</b-col
                  ><b-col>
                    <b-img
                      thumbnail
                      fluid
                      v-bind="mainBadges"
                      :src="getBadges(52)"
                      alt="Image 1"
                    ></b-img>
                    Ação</b-col
                  ><b-col>
                    <b-img
                      thumbnail
                      fluid
                      v-bind="mainBadges"
                      :src="getBadges(53)"
                      alt="Image 1"
                    ></b-img
                    >Romance
                  </b-col>
                  <b-col>
                    <b-img
                      thumbnail
                      fluid
                      v-bind="mainBadges"
                      :src="getBadges(54)"
                      alt="Image 1"
                    ></b-img
                    >Terror
                  </b-col>
                  <b-col>
                    <b-img
                      thumbnail
                      fluid
                      v-bind="mainBadges"
                      :src="getBadges(55)"
                      alt="Image 1"
                    ></b-img
                    >Ficção
                  </b-col>
                  <b-col>
                    <b-img
                      thumbnail
                      fluid
                      v-bind="mainBadges"
                      :src="getBadges(56)"
                      alt="Image 1"
                    ></b-img>
                    Terror</b-col
                  > </b-row
                ><b-row>
                  <b-col>
                    <b-img
                      thumbnail
                      fluid
                      v-bind="mainBadges"
                      :src="getBadges(57)"
                      alt="Image 1"
                    ></b-img>
                    Animação</b-col
                  ><b-col>
                    <b-img
                      thumbnail
                      fluid
                      v-bind="mainBadges"
                      :src="getBadges(58)"
                      alt="Image 1"
                    ></b-img
                    >Família </b-col
                  ><b-col>
                    <b-img
                      thumbnail
                      fluid
                      v-bind="mainBadges"
                      :src="getBadges(59)"
                      alt="Image 1"
                    ></b-img>
                    Science</b-col
                  ><b-col>
                    <b-img
                      thumbnail
                      fluid
                      v-bind="mainBadges"
                      :src="getBadges(60)"
                      alt="Image 1"
                    ></b-img
                    >Ação
                  </b-col>
                  <b-col>
                    <b-img
                      thumbnail
                      fluid
                      v-bind="mainBadges"
                      :src="getBadges(61)"
                      alt="Image 1"
                      class="opacity-25"
                    ></b-img>
                    50 Terror
                  </b-col>
                  <b-col>
                    <b-img
                      thumbnail
                      fluid
                      v-bind="mainBadges"
                      :src="getBadges(62)"
                      alt="Image 1"
                      class="opacity-25"
                    ></b-img>
                    50 Animação
                  </b-col>
                  <b-col>
                    <b-img
                      thumbnail
                      fluid
                      v-bind="mainBadges"
                      :src="getBadges(63)"
                      alt="Image 1"
                      class="opacity-25"
                    ></b-img>
                    100 Terror
                  </b-col>
                </b-row>
              </b-list-group>
            </b-tab>
            <b-tab
              title="Quizzes"
              lazy
              title-link-class="color"
              v-if="getLoggedUser.type == 'admin'"
            >
              <b-list-group>
                <table v-if="getQuizzes">
                  <tr>
                    <th scope="col-2">Nº</th>
                    <th scope="col-2">Title</th>
                    <th scope="col-2">Imagem</th>
                    <th scope="col-2">Tipo</th>
                    <th scope="col-2">Pontos</th>
                    <th scope="col-2">Questões</th>
                  </tr>
                  <tr v-for="(quiz, index) in getQuizzes" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ quiz.name }}</td>
                    <td>{{ quiz.quantity }}</td>
                  </tr>
                </table>
                <table
                  class="table"
                  v-for="(quiz, index) in getQuizzes"
                  :key="index"
                >
                  <thead>
                    <tr></tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>{{ quiz.title }}</td>
                      <td>{{ quiz.image }}</td>
                      <td>{{ quiz.type }}</td>
                      <td>{{ quiz.points }}</td>
                      <td>{{ quiz.questions }}</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </b-list-group>
            </b-tab>
            <b-tab
              title="Filmes"
              lazy
              title-link-class="color"
              v-if="getLoggedUser.type == 'admin'"
            >
              <b-list-group>
                <b-list-group-item>Filmes</b-list-group-item></b-list-group
              >
            </b-tab>
            <b-tab
              title="Séries"
              lazy
              title-link-class="color"
              v-if="getLoggedUser.type == 'admin'"
            >
              <b-list-group>
                <b-list-group-item>Séries</b-list-group-item>
              </b-list-group>
            </b-tab>
          </b-tabs>
        </b-col>
      </b-row>
    </b-container>
    <p></p>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      file: null,
      mainImage: {
        center: true,
        blank: true,
        width: 200,
        height: 200,
      },
      mainBadges: {
        width: 200,
        height: 200,
      },
      items: [
        {
          Posição: 1,
          Utilizador: "UserTest",
          Pontuação: 1000,
        },
        { Posição: 2, Utilizador: "UserTest1", Pontuação: 800 },
        { Posição: 3, Utilizador: "UserTest2", Pontuação: 200 },
        { Posição: 4, Utilizador: "UserTest3", Pontuação: 20 },
      ],
    };
  },
  components: {
    Footer,
  },
  computed: {
    ...mapGetters(["getQuizzes", "getLoggedUser"]),
  },
  methods: {
    getImageUrl(imageID) {
      const { width, height } = this.mainImage;
      return `https://picsum.photos/${width}/${height}/?image=${imageID}`;
    },
    getBadges(badgeID) {
      const { width, height } = this.mainBadges;
      return `https://picsum.photos/${width}/${height}/?image=${badgeID}`;
    },
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
  background-color: #b93e00 !important;
  text-decoration: none;
}
</style>
