<template>
  <div id="app">
    <router-view :users="users" :columnNames="columnNames"/>

    <PageButtons/>
  </div>
</template>

<script>
  // Imports for Pages and axios fetch
  import axios from 'axios'
  import PageButtons from './components/PageButtons'

  // API URL for User Data Fetch
  const API_URL = "http://localhost:8000/users"

  // Export App
  export default {
    name: 'App',
    components: {
      PageButtons
    },
    data( ) {
      return {
        users: { },
        columnNames: ["ID", "Username", "Last Login", "Login Count", "Project Count"]
      }
    },
    mounted( ) {
      // Axios fetch data on component mount
      axios.get(API_URL)
        .then(res => {
          this.users = res.data;
        }).catch(err => {console.log(err)})
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    text-align: center;
    margin-top: 60px;
  }
</style>

