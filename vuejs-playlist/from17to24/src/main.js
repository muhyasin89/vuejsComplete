import Vue from 'vue'
import App from './App.vue'
import Test from './components/Test.vue'

Vue.component('tests', Test);

export const bus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
