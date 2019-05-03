<template>
<div id="tests">
  <ul>
    <li v-for="test in tests" v-on:click="test.active = !test.active">
      <h4>{{ test.name }} </h4>
      <p v-show="test.active">Posisi: {{ test.posisi }}</p>
      <p>Active : {{ test.active }}</p>
    </li>
  </ul>
  <button v-on:click="deleteTest">Delete Test</button>
  </div>
</template>

<script>
export default {
  props: {
    tests:{
      type: Array
    }
  },
  data () {
    return {

    }
  },
  methods:{
    deleteTest: function(){
      this.tests.pop()
    }
  }
}
</script>

<style lang="scss" scoped>
  ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
  }

  li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
  }

  h1{
    color:purple
  }
</style>
