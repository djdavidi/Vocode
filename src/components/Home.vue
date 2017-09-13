<template>
  <div class="home-page">
    {{welcomeMessage}}
  <editor></editor>
  </div>
</template>

<script>
import {mapState} from "vuex";
import Editor from "./Editor"
export default {
  name: "home",
  data () {
    return {
      welcomeMessage: "Welcome to Vocode"
    }
  },
  mounted () {
    // this.store.$dispatch()
  },
  components: {
    Editor
  },
  computed: mapState([
  "projects"
  ])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-page {
  height: 100vh;
  width: 100vw;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
