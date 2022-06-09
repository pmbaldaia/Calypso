<template>
  <div id="app">
    <h4 class="head">Application</h4>
    <div class="container">
      <table
        class="table-responsive bordered highlight centered hoverable z-depth-2"
        v-show="persons.length"
      >
        <thead>
          <tr>
            <th v-for="(column, index) in columns" :key="index">
              {{ column }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(person, index) in persons" :key="index">
            <td>{{ index }}</td>
            <td>
              {{ person.lname }}
            </td>
            <td>
              {{ person.fname }}
            </td>
            <td>{{ person.age }} years</td>
            <td>
              {{ person.job }}
            </td>
            <td>
              {{ person.address }}
            </td>
            <td style="width: 18%">
              <a
                href="#modal"
                @click="edit(index)"
                class="btn waves-effect waves-light yellow darken-2"
                ><i class="material-icons">edit</i>
              </a>
              <a
                href="#!"
                class="btn waves-effect waves-light red darken-2"
                @click="archive(index)"
                ><i class="material-icons">archive</i>
              </a>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <div class="input-field">
                <input
                  placeholder="Placeholder"
                  ref="lname"
                  v-model="input.lname"
                  id="lname"
                  type="text"
                />
                <label for="lname">Last Name</label>
              </div>
            </td>
            <td>
              <div class="input-field">
                <input
                  placeholder="Placeholder"
                  v-model="input.fname"
                  id="fname"
                  type="text"
                />
                <label for="fname">First Name</label>
              </div>
            </td>
            <td>
              <div class="input-field">
                <input
                  placeholder="Placeholder"
                  v-model="input.age"
                  id="age"
                  type="text"
                />
                <label for="age">Age</label>
              </div>
            </td>
            <td>
              <div class="input-field">
                <input
                  placeholder="Placeholder"
                  v-model="input.job"
                  id="job"
                  type="text"
                />
                <label for="job">Job</label>
              </div>
            </td>
            <td>
              <div class="input-field">
                <input
                  placeholder="Placeholder"
                  v-model="input.address"
                  id="address"
                  type="text"
                />
                <label for="address">Address</label>
              </div>
            </td>
            <td>
              <a href="#!" @click="add" class="btn btn-waves green darken-2"
                ><i class="material-icons">add</i></a
              >
            </td>
          </tr>
        </tbody>
      </table>

      <table
        class="table-responsive centered bordered striped highlight z-depth-1 hoverable"
        v-show="bin.length"
      >
        <thead>
          <tr>
            <th v-for="(column, index) in columns" :key="index">
              {{ column }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(person, index) in bin" :key="index">
            <td>{{ index }}</td>
            <td>
              {{ person.lname }}
            </td>
            <td>
              {{ person.fname }}
            </td>
            <td>{{ person.age }} years</td>
            <td>
              {{ person.job }}
            </td>
            <td>
              {{ person.address }}
            </td>
            <td>
              <a
                href="#!"
                @click="restore(index)"
                class="btn waves-effect waves-light blue darken-2"
                ><i class="material-icons">restore</i>
              </a>
              <a
                href="#!"
                @click="deplete(index)"
                class="btn waves-effect waves-light red darken-2"
                ><i class="material-icons">delete</i>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div id="modal" class="modal modal-fixed-footer">
      <div class="modal-content">
        <h4 class="center-align">Edit</h4>
        <p class="center-align">Edition form. Update informations</p>
        <div class="row">
          <form class="col s12">
            <div class="row">
              <div class="input-field col s6">
                <input
                  placeholder="John"
                  id="last_name"
                  type="text"
                  v-model="editInput.lname"
                />
                <label for="last_name">Last Name</label>
              </div>
              <div class="input-field col s6">
                <input
                  placeholder="Doe"
                  id="first_name"
                  type="text"
                  v-model="editInput.fname"
                />
                <label for="first_name">First Name</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s6">
                <input
                  placeholder="26"
                  id="edit_age"
                  type="text"
                  v-model="editInput.age"
                />
                <label for="edit_age">Age</label>
              </div>
              <div class="input-field col s6">
                <input
                  placeholder="Teacher"
                  id="edit_job"
                  type="text"
                  v-model="editInput.job"
                />
                <label for="edit_job">Job</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input
                  placeholder="Address"
                  id="edit_address"
                  type="text"
                  v-model="editInput.address"
                />
                <label for="edit_address">First Name</label>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="modal-footer">
        <a
          href="#!"
          class="modal-action modal-close waves-effect waves-green btn-flat"
          >Close</a
        >
        <a href="#!" @click="update" class="btn waves-effect waves-light"
          ><i class="material-icons">edit</i></a
        >
      </div>
    </div>
  </div>
</template>

<script>
new Vue({
  el: "#app",
  data: {
    columns: [
      "Index",
      "Last Name",
      "First Name",
      "Age",
      "Job",
      "Address",
      "Actions ",
    ],
    persons: [
      {
        lname: "ADIASSA",
        fname: "Ethiel",
        age: 20,
        job: "Web Developer",
        address: "Lome-Togo",
      },
      {
        lname: "ADUFU",
        fname: "Patrick",
        age: 20,
        job: "Banker",
        address: "Senegal-Dakar",
      },
      {
        lname: "MOUTON",
        fname: "John",
        age: 28,
        job: "Scientist",
        address: "New-York/USA",
      },
      {
        lname: "SMITH",
        fname: "Luther",
        age: 18,
        job: "Pilot",
        address: "London/GB",
      },
      {
        lname: "WALTER",
        fname: "Ramses Peter",
        age: 38,
        job: "Doctor",
        address: "Paris/France",
      },
      {
        lname: "GEORGES",
        fname: "Luther",
        age: 45,
        job: "Musician",
        address: "Vienne",
      },
      {
        lname: "MICHAEL",
        fname: "Daven",
        age: 27,
        job: "Boxer",
        address: "Pekin/China",
      },
    ],
    bin: [],
    input: {
      lname: "WADE",
      fname: "Johnson",
      age: 38,
      job: "Comedian",
      address: "Roma/Italia",
    },
    editInput: {
      lname: "",
      fname: "",
      age: 0,
      job: "",
      address: "",
    },
  },
  methods: {
    //function to add data to table
    add: function () {
      this.persons.push({
        lname: this.input.lname,
        fname: this.input.fname,
        age: this.input.age,
        job: this.input.job,
        address: this.input.address,
      });

      for (var key in this.input) {
        this.input[key] = "";
      }
      this.persons.sort(ordonner);
      this.$refs.lname.focus();
    },
    //function to handle data edition
    edit: function (index) {
      this.editInput = this.persons[index];
      console.log(this.editInput);
      this.persons.splice(index, 1);
    },
    //function to send data to bin
    archive: function (index) {
      this.bin.push(this.persons[index]);
      this.persons.splice(index, 1);
      this.bin.sort(ordonner);
    },
    //function to restore data
    restore: function (index) {
      this.persons.push(this.bin[index]);
      this.bin.splice(index, 1);
      this.bin.sort(ordonner);
    },
    //function to update data
    update: function () {
      // this.persons.push(this.editInput);
      this.persons.push({
        lname: this.editInput.lname,
        fname: this.editInput.fname,
        age: this.editInput.age,
        job: this.editInput.job,
        address: this.editInput.address,
      });
      for (var key in this.editInput) {
        this.editInput[key] = "";
      }
      this.persons.sort(ordonner);
    },
    //function to defintely delete data
    deplete: function (index) {
      // console.log(this.bin[index]);
      this.bin.splice(index, 1);
    },
  },
});

//function to sort table data alphabetically
var ordonner = function (a, b) {
  return a.lname > b.lname;
};

$(function () {
  //initialize modal box with jquery
  $(".modal").modal();
});
</script>

<style>
body {
  background: linear-gradient(limegreen, transparent),
    linear-gradient(90deg, skyblue, transparent),
    linear-gradient(-90deg, coral, transparent);
  background-blend-mode: screen;
}
div:first-child {
  margin: 20px 0;
  margin: 15px 2px;
  background: #ffffff !important;
}
table:last-of-type {
  margin: 15px 2px;
  background: #fdfdef !important;
}
.head {
  text-align: center;
  margin: 45px 35px;
}
.img-container {
  text-align: center;
}
</style>
