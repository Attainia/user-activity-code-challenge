<template>
  <div class="userlist" v-bind:class="{ highlight: highlighted }" ud="userl">
    <h1>{{ msg }}</h1>
    <table>
      <tbody>
        <tr><th>ID</th><th>User</th><th>Last Login</th><th>Login Count</th><th>Project Count</th></tr>
        <tr v-bind:key="data.id" v-for="data in userJson" v-bind:class="{loggedin: (parseInt(data.login_count) > 0), notloggedin: (parseInt(data.login_count) < 1)}">
          <td>{{data.id}}</td>
          <td>{{data.username}}</td>
          <td>{{data.last_login}}</td>
          <td>{{data.login_count}}</td>
          <td>{{data.project_count}}</td>
        </tr>
      </tbody>
    </table>
    <button @click="highlighted = !highlighted">Highlight</button>
  </div>
</template>

<script lang="ts">
import json from '../data/users.json'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class userslist extends Vue {
  @Prop() private msg!: string;
  data () {
    return {
      userJson: json,
      highlighted: false
    }
  };
}

</script>

<style scoped lang="scss">
.userlist { text-align:center; margin:0 auto; max-width:900px; }
table { border:1px solid #898989; padding:15px; margin:0 auto; max-width:900px;}
td { line-height:25px; padding:3px 15px; }
button { padding:5px 15px; margin-top:30px; }
.inactives .highlight .notloggedin { background:#fdc0c0; }
.workers .highlight .loggedin { background:#cbeacb; }
</style>
