<template>
  <div>
    <form-helper>
      <h2 slot="title">{{ title }}</h2>
      <p slot="text">{{ text }}</p>
      <div slot="form-header">
        <h3>This is the Title of the form</h3>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required />
        <input type="password" placeholder="password" required />
      </div>
      <div slot="form-controls">
        <button v-on:click="handleSubmit">Submit</button>
      </div>
    </form-helper>
    <keep-alive>
      <component v-bind:is="component"></component>
    </keep-alive>
    <button v-on:click="component = 'form-one'">Show form One</button>
    <button v-on:click="component = 'form-two'">Show form Two</button>
  </div>
</template>

<script>
import FormHelper from './components/FormHelper.vue';
import formOne from './components/formOne.vue';
import formTwo from './components/formTwo.vue';

export default {
  name: 'app',
  components: {
    'form-helper': FormHelper,
    'form-one': formOne,
    'form-two': formTwo
  },
  data(){
    return{
      title: 'I am the slot title',
      text: 'I am the paragraph text for the slot',
      component: 'form-one'
    }
  },
  methods: {
    handleSubmit: function(){

    }
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
