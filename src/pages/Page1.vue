<template>
  <div class="page">
    <header>
      <h1>User Table 1</h1>
    </header>
    <Table 
      :users="users" 
      :columnNames="columnNames" 
      :pageNumber="1"/>
  </div>
</template>

<script>
  import Table from '../components/Table.vue'

  export default {
    name: 'Page1',
    components: {
      Table
    },
    props: {
      users: {
        type: Object,
        required: true
      },
      columnNames: {
        type: Array,
        required: true
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