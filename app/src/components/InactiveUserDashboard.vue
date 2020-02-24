<template>
  <div>
    <h1>Inactive User Dashboard</h1>
    <table>
      <tr>
        <th>ID</th>
        <th>Username</th>
        <th>Last Login</th>
        <th>Login Count</th>
        <th>Project Count</th>
      </tr>
      <tr v-for="user in users" :key="user.id" v-bind:class="generateUserHighlightClass(user)">
        <td>{{user.id}}</td>
        <td>{{user.username}}</td>
        <td>{{user.last_login | formatDate}}</td>
        <td>{{user.login_count}}</td>
        <td>{{user.project_count}}</td>
      </tr>
    </table>
    <div class="button" v-on:click="toggleInactiveUserHighlight">
      {{areInactiveUsersHighlighted ? 'Unhighlight' : 'Highlight'}} Inactive Users
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

export default {
  name: 'InactiveUserDashboard',
  data () {
    return {
      users: [],
      areInactiveUsersHighlighted: false
    }
  },
  methods: {
    toggleInactiveUserHighlight: function (event) {
      this.areInactiveUsersHighlighted = !this.areInactiveUsersHighlighted
    },
    generateUserHighlightClass: function (user) {
      var isUserActive = user.login_count > 0
      return !isUserActive && this.areInactiveUsersHighlighted ? 'highlighted' : ''
    }
  },
  mounted () {
    axios
      .get('http://localhost:8000/users')
      .then(response => (this.users = response.data))
  },
  filters: {
    formatDate: (isoDateTime) => { return moment(isoDateTime).format('MM/DD/YYYY hh:mm') }
  }
}
</script>

<style scoped>
h1 {
  font-weight: normal;
}

table {
  margin: 30px auto;
  border-collapse: collapse;
  border: 1px solid #DDD;
}

td, th {
  padding: 5px 15px;
  text-align: left;
  border-bottom: 1px solid #DDD;
}

.highlighted {
  background-color: #FF4600;
}

.button {
  border: 2px solid black;
  display: inline-block;
  background-color: white;
  color: black;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
}

.button:hover {
  background-color: #DDD;
}
</style>
