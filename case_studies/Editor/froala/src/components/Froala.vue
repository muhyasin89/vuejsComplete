<template>
  <div class="froala">
    <froala :tag="'textarea'" :config="config" v-model="TextFroala"></froala>
  </div>
</template>

<script>
// Require Froala Editor js file.
require('froala-editor/js/froala_editor.pkgd.min.js')

// Require Froala Editor css files.
require('froala-editor/css/froala_editor.pkgd.min.css')
require('froala-editor/css/froala_style.min.css')

Vue.config.productionTip = false

import Vue from 'vue'
// Import and use Vue Froala lib.
import VueFroala from 'vue-froala-wysiwyg'
Vue.use(VueFroala)

export default {
  name: 'Froala',
  data(){
      return {
          TextFroala: null,
          config: {
                events: {
                }
            }
        }
      }
}

</script>