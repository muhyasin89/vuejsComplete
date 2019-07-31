<template>
    <div id="wysiwyg">
        <!-- Tag bellow couse looping -->
        <!-- <wysiwyg v-model="TextInput" /> -->
    </div>
</template>

<style>
    
</style>

<script>
import Vue from 'vue'
import wysiwyg from "vue-wysiwyg";

Vue.use(wysiwyg, {

   // { [module]: boolean (set true to hide) }
   hideModules: { "bold": true },
 
   // you can override icons too, if desired
   // just keep in mind that you may need custom styles in your application to get everything to align
   iconOverrides: { "bold": "<i class='your-custom-icon'></i>" },
  
   // if the image option is not set, images are inserted as base64
   image: {
     uploadURL: "/api/myEndpoint",
     dropzoneOptions: {}
   },
  
   // limit content height if you wish. If not set, editor size will grow with content.
   maxHeight: "500px"
});

export default {
    name: 'wysiwyg',
    data(){
        return {
            TextInput: null
        }
    }
}
</script>