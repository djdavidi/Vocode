<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import {mapState} from "vuex";
export default {
  name: "app",
  created() {
    // this.$store.dispatch("Action");
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 100vh;
  width: 100vw;
}
</style>
