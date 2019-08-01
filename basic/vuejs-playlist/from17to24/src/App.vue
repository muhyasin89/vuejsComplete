<template>
  <div>
    <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)" ></app-header>
    <app-test v-bind:tests="tests"></app-test>
    <hr/>
    <app-test v-bind:tests="tests"></app-test>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Test from './components/Test.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
      'app-header': Header,
      'app-test': Test,
      'app-footer': Footer
    },
  data () {
    return {
      tests: [
        {name: 'Muh Yasin', posisi: 'Developer', active: true},
        {name: 'Mr.x', posisi: 'Owner', active: true},
        {name: 'Mr.y', posisi: 'Operator', active: false},
        {name: 'Mr. 9', posisi: 'Developer', active: false},
        {name: 'Raka', posisi: 'Developer', active: false},
        {name: 'Andy Winarco', posisi: 'Auditor', active: true},
      ],
      title: "Vue Header",
      copyright: "CopyRight: This website is develop by muhyasin89"
    }
  },
  methods: {
    updateTitle:function(title){
      this.title = title
    }
  }
}
</script>

<style lang="scss">
h1{
color:red;
}
</style>
