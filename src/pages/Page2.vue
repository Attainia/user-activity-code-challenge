<template>
  <div class="page">
    <header>
      <h1>User Table 2</h1>
    </header>
    <Table 
      :users="users" 
      :columnNames="columnNames" 
      :pageNumber="2"/>
  </div>
</template>

<script>
  import Table from '../components/Table.vue'

  export default {
    name: 'Page2',
    components: {
      Table
    },
    props: {
      users: Array,
      loginCount: Number
    },
    data( ) {
      return {
        columnNames: ["ID", "Username", "Last Login", "Login Count", "Project Count"]
      }
    }
  }
</script>

<style scoped>
  .page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px;
  }
</style>