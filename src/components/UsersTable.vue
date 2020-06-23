<template>
  <div class="users-table">
    <table>
      <thead align="left">
        <th>ID</th>
        <th>Username</th>
        <th>Last Login</th>
        <th>Login Count</th>
        <th>Project Count</th>
      </thead>
      <tbody align="left" v-if="users" :class="{ highlighted: isHighlighted }">
        <tr
          v-for="user in users"
          :key="user.id"
          :class="{ highlight: compute(user) }"
        >
          <td>{{ user.id }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.lastLogin }}</td>
          <td>{{ user.loginCount }}</td>
          <td>{{ user.projectCount }}</td>
        </tr>
      </tbody>
    </table>
    <button @click="toggleHighlight()">Highlight active users</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { User } from "../api/users";

@Component
export default class HelloWorld extends Vue {
  @Prop() private users!: User[];
  @Prop() private compute!: any;
  private isHighlighted = false;

  public toggleHighlight() {
    this.isHighlighted = !this.isHighlighted;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
table {
  th,
  td {
    padding: 5px 10px;
  }
}
</style>
