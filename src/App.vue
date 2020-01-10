<template>
  <div id="app">
    <div id="nav">
      <router-link to="/inactives">Inactives</router-link> |
      <router-link to="/workers">Workers</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app { text-align: center; }
#nav {
  padding: 30px;
  a {
    color: #f24541;
    &.router-link-exact-active {
      color: #fF4571;
    }
  }
}
</style>
