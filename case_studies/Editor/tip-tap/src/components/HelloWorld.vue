<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <text-input></text-input>
    <h3>Text Editor</h3>
    <text-editor></text-editor>
    <h3>Text  Basic</h3>
    <p>{{ parentData }}</p>
    <text-basic :inputData.sync="parentData" :onUpdate="changeData" @keyup="welcomeData"></text-basic>
    <h3>Hidding Menu</h3>
    <text-menu-hidding></text-menu-hidding>
  </div>
</template>

<script>
import RichTextEditor from '@/components/TipTap'
import RichTextComplete from '@/components/TipTapComplete'
import RichTextBasic from '@/components/TipTapBasic'
import HidingMenu from '@/components/TipTapHidingMenu'

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    inputData: String
  },
  data(){
    return {
      parentData: "Jithil"
    }
  },
  methods: {
    changeData(){
      console.log('wew', parentData)
    },
    welcomeData(){
      console.log('welcome data')
    }
  },
  components: {
    'text-input': RichTextEditor,
    'text-editor': RichTextComplete,
    'text-basic': RichTextBasic,
    'text-menu-hidding': HidingMenu
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
