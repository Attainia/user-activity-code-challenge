<template>
  <div>
    <h1>Active User Dashboard</h1>
    <table>
      <tr>
        <th>ID</th>
        <th>Username</th>
        <th>Last Login</th>
        <th>Login Count</th>
        <th>Project Count</th>
      </tr>
      <tr v-for="user in users" :key="user.id">
        <td>{{user.id}}</td>
        <td>{{user.username}}</td>
        <td>{{user.last_login | formatDate}}</td>
        <td>{{user.login_count}}</td>
        <td>{{user.project_count}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

export default {
  name: 'ActiveUserDashboard',
  data () {
    return {
      users: []
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
  margin-left: auto;
  margin-right: auto;
  border-collapse: collapse;
  border: 1px solid #ddd;
}

td, th {
  padding: 5px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
</style>
