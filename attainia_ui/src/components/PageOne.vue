<template>
  <div>
    <h1>Table 1 component</h1>
    <b-button v-on:click="activate">Toggle</b-button>
    <Table v-bind:users="users" v-bind:fields="fields" v-bind:toggleType="'table-danger'"></Table>
  </div>
</template>

<script>

import axios from 'axios'; 
import Table from './Table.vue';

export default {
  name: "PageOne",
  components:{
    Table
  },
  data(){
    return {
      users: [],
      toggled: false,
      fields: ["id", "username", "last_login", "login_count", "project_count"]
    }
  },
  created(){
    axios.get('http://localhost:8000/users/')
    .then(res =>{

      this.users = res.data;

      this.users.forEach(user =>{
        user.toggle = false;
      });
    })
    .catch(err => console.log(err));
  },
  methods: {
    activate: function(){

      this.toggled = !this.toggled;

      if (this.toggled == true){
        let updatedUsers = [];

        for (let i = 0; i < this.users.length; i++){
          let user = this.users[i];

          if (user.login_count == 0){
            user.toggle = true;
          }
          updatedUsers.push(user);
        }

        this.users = updatedUsers;
      }
      else{

        let updatedUsers = [];

        for (let i = 0; i < this.users.length; i++){
          let user = this.users[i];
          user.toggle = false;
          updatedUsers.push(user);
        }

        this.users = updatedUsers;
      }
    }
  }
}
</script>
