

<template>
  <div class="home-page">
    {{welcomeMessage}}
  </div>
</template>

<script>

import {mapState} from "vuex";
import * as brace from 'brace'
import 'brace/ext/modelist'
import 'brace/ext/themelist'
const modelist = brace.acequire('ace/ext/modelist')
const themelist = brace.acequire('ace/ext/themelist')
export default {
  name: "home",
  data () {
    return {
      welcomeMessage: "Welcome to the SEVN Boilerplate"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
