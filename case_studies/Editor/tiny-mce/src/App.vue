<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <editor api-key="API_KEY" :init="{plugins: 'wordcount'}"></editor>
    <!-- <p>This Vue</p>
    <vue-mce /> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import TinyMCE from 'tinymce-vue-2'

// es modules
import Editor from '@tinymce/tinymce-vue'
// commonjs require
// NOTE: default needed after require
// var Editor = require('@tinymce/tinymce-vue').default;
import Vue from 'vue'

// import VueMce from 'vue-mce'
// import { component } from 'vue-mce'

// Vue.use(VueMce)

export default {
  name: 'app',
  components: {
    HelloWorld,
    // 'tiny-mce': TinyMCE,
    'editor': Editor,
    // 'vue-mce': component,
  },
  mounted(){
    // tinymce.init({
    //   selector: 'textarea',  // change this value according to your HTML
    //   menubar: 'file edit insert view format table tools help'
    // });
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
