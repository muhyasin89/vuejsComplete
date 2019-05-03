<template>
  <footer>
    <p> {{ copyright }} {{ title}}</p>
  </footer>
</template>

<script>
import { bus } from '../main';

export default {

  data () {
    return {
      title: '',
      copyright : 'i am the legal one'
    }
  },
  created(){
  bus.$on('titleChanged', (data) => {
      this.title = data;
    })
  }
}
</script>

<style lang="scss" scoped>
  footer{
    background: blue;
    padding: 10px;
    color:white;
    text-align: center;
  }
</style>
