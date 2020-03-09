<template>
  <div class="pageButtons">
    <router-link class="router-link" to="/page1">Page 1</router-link>
    <router-link class="router-link" to="/page2">Page 2</router-link>
  </div>
</template>

<script>
  export default {
    name: 'PageButtons',
  }
</script>

<style scoped>
  .pageButtons {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  button {
    width: 40px;
    height: 30px;
    margin: 10px 15px;
    border-radius: 5px;
  }
  .router-link {
    text-decoration: none;
    font-size: 16px;
    margin: 30px;
    padding-left: 20px;
    padding-right: 20px;
    border: 1px solid grey;
    border-radius: 5px;
  }
</style>