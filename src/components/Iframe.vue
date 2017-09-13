<template>
	<div id="editor-results">
	<iframe></iframe>
  </div>
</template>

<script>

export default {
  name: "iframe",
  props:["docString"]
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #editor-results {
    height: 75%;
    width: 20%;
    background: white;
  }
</style>
