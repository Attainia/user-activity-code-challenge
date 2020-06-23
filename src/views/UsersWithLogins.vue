<template>
  <UsersTable :users="users" :compute="shouldHighlight"></UsersTable>
</template>

<script lang="ts">
import { mapState } from "vuex";
import { User } from "@/api/users";
import UsersTable from "@/components/UsersTable.vue";

export default {
  components: {
    UsersTable
  },
  computed: {
    ...mapState<User[]>({
      users: ({ users }) => users.users
    })
  },
  created() {
    this.$store.dispatch("users/get");
  },
  methods: {
    shouldHighlight(user: User) {
      return user.loginCount > 0;
    }
  }
};
</script>

<style lang="scss">
.users-table .highlighted .highlight {
  background-color: green;
}
</style>
