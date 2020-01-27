<template>
  <div id="page_one">
    <header>
      <h1>Users with a login count of 0</h1>
    </header>
    <table>
      <!-- thread is the table head -->
      <!-- tr Defines a row in a table -->
      <!-- th Defines a header cell in a table -->
      <!-- td Defines a cell in a table -->
      <thead>
        <tr>
          <th>id</th>
          <th>username</th>
          <th>last_login</th>
          <th>login_count</th>
          <th>project_count</th>
        </tr>
      </thead>
      <tbody>
        <tr 
          v-for="data in myJson"
          v-bind:key='data'
        >  
        <!-- v-for = a for loop -->
        <!-- :class is checking for true/false, if truth, then do the thing -->
          <td v-bind:key='data.id'>{{data.id}}</td>
          <td v-bind:key='data.username'>{{data.username}}</td>
          <td v-bind:key='data.last_login'>{{data.last_login}}</td>
          <td id="login_count" class="login_count" v-bind:key='data.login_count'>{{data.login_count}}</td>
          <td v-bind:key='data.project_count'>{{data.project_count}}</td>
        </tr>
      </tbody>
    </table>
    <section>
      <p>
        Click the red button to highlight all user rows with a login count of 0
      <p/>
      <input
        id="button"
        type="button" 
        @click="toggle($event)"
      >
      <!-- v-model watches and binds event to the function-->
      <!-- v-model="data.login_count" -->
      <!-- :class is checking for true/false, if truth, then do the thing -->
      <!-- try: @click="change" instead -->
      <!-- v-on:click listen to DOM events and run some JavaScript when they’re triggered. -->
    </section>
  </div>
</template>

<script>
//dislay static table data, for now
import json from './users.json'
export default {
  data() {
    return {
      myJson: json
    }
  },
  /*methods: {
    //insert function that will change login_count to red if count of 0
    //on button click event, execute if then statement and toggle class

    /*toggle() {
      var element = document.getElementById('#login_count');
      element.className = "login_count_red"
    },*/
    /*toggle() {
      $('#button').click(function () {
        $('#login_count').className = 'login_count_red'
        console.log('toggle ran');
      })

    }
    toggle(event) {
      if (event) {
        event.preventDefalt();
        if ('td' = '.login_count') {
          var element = document.getElementById('#login_count');
          element.className = "login_count_red"
        }
      }
    }
  }*/
}
</script>
  
<style scoped> 
table {
  font-family: 'Open Sans', sans-serif;
  width: 750px;
  border-collapse: collapse;
  border: 3px solid black;
  margin: 10px 10px 0 10px;
}

table th {
  text-transform: uppercase;
  text-align: left;
  background: white;
  padding: 8px;
  min-width: 30px;
}

table td {
  text-align: left;
  padding: 8px;
  border: 2px solid black;
  background: white;
}

.login_count {
  text-align: left;
  padding: 8px;
  border: 2px solid black;
  background:white;
}

.login_count_red {
  text-align: left;
  padding: 8px;
  border: 2px solid black;
  background: red;
}

table td:last-child {
  border-right: none;
}
table tbody tr:nth-child(2n) td {
  background: white;
}

input[type=button] {
  background-color: red; 
  padding: 15px 20px;
}
</style>
