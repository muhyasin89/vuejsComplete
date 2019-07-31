<template>
    <div id="tinymce">
        <tiny-mce id="editor" v-model="description" :toolbar="toolbar"></tiny-mce>
    </div>
</template>

<script>

export default {
  name: 'tinymce',
  data(){
      return {
          description: null,
          
      }
  },
  components: {
      
  }
}
</script>