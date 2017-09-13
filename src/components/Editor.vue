<template>
  <div id="editor-container">
    <div id="work-files"></div>
    <div id="editor"></div>
    <iframe id="editor-results"></iframe>
    <div id="available-commands"></div>
  </div>
</template>

<script>
import * as brace from 'brace'
import 'brace/mode/javascript';
import 'brace/theme/monokai';



export default {
  name: "editor",
  data () {
    return {
    	editor: null,
      editorJS: null,
      result: null
    }
  },
  mounted() {
  	this.editor = ace.edit('editor')
  	this.editor.getSession().setMode('ace/mode/javascript');
  	this.editor.setTheme('ace/theme/monokai');
    this.editor.on("change", () => {
      this.editorJS = this.editor.getValue();
      this.calculate();
    }); 
  },
  methods: {
    calculate() {
      console.log("Inside calculate", this.editorJS);
      // this.result = eval(`${this.editorJS}`)
      console.log("result", this.result)
      this.$el.querySelector("iframe").srcdoc = `<div>hey</div><style>c.value</style><script>j.value<\/script>`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #work-files {
    height: 75%;
    width: 10%;
    background: blue;
  }
	#editor-container {
		height: 75%;
		width: 100%;
    display: flex;
	}
	#editor {
		height: 100%;
		/*width: 100px;*/
		width: 50%;
	}

  #editor-results {
    height: 75%;
    width: 20%;
    background: white;
  }
</style>
