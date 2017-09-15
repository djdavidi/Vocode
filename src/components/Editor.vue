<template>
  <div id="editor-container">
    <div id="work-files">
      <button @click="changeEditor('html')">HTML</button>
      <button @click="changeEditor('css')">CSS</button>
      <button @click="changeEditor('js')">Javascript</button>
    </div>
    <div id="editor-html" v-show="currentEditor==='html'"></div>
    <div id="editor-css" v-show="currentEditor==='css'"></div>
    <div id="editor-js" v-show="currentEditor==='js'"></div>
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
    	editorHTML: null,
      editorCSS: null,
      editorJS: null,
      currentEditor: "html",
      result: null
    }
  },
  mounted() {
  	this.editorHTML = ace.edit('editor-html')
  	this.editorHTML.getSession().setMode('ace/mode/html');
  	this.editorHTML.setTheme('ace/theme/monokai');
    this.editorHTML.on("change", () => {
      this.editorHTML = this.editorHTML.getValue();
      this.calculate();
    }); 
    this.editorCSS = ace.edit('editor-css')
    this.editorCSS.getSession().setMode('ace/mode/css');
    this.editorCSS.setTheme('ace/theme/monokai');
    this.editorCSS.on("change", () => {
      this.editorCSS = this.editorCSS.getValue();
      this.calculate();
    }); 
    this.editorJS = ace.edit('editor-js')
    this.editorJS.getSession().setMode('ace/mode/javascript');
    this.editorJS.setTheme('ace/theme/monokai');
    this.editorJS.on("change", () => {
      this.editorJS = this.editorJS.getValue();
      this.calculate();
    }); 
  },
  methods: {
    calculate() {
      console.log("Inside calculate", this.editorJS);
      // this.result = eval(`${this.editorJS}`)
      console.log("result", this.result)
      this.$el.querySelector("iframe").srcdoc = `<div>hey</div><style>c.value</style><script>j.value<\/script>`
    },
    changeEditor(newEditor) {
      this.currentEditor = newEditor;
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
	#editor, #editor2, #editor3 {
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
