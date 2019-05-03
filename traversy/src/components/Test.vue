<template>
  <div id="app">
  <input type="text" v-model="msg"><br>
      <p>{{ msg }}</p>
      <p v-html="ola"></p>
      <h3 v-if="showName">Hello, {{user.firstname}} {{ user.lastname}}</h3>
      <h4 v-else="showName"> zero </h4>
      <ul>
      <li v-for="item in item">{{ item.title }}</li>
      </ul>
      <button v-on:click="greet('Hello world')"> Say greeting </button>
      <input type="text" v-on:keyup="pressKey" v-on:keyup.enter="enterHit"/>
      <label> First Name:  </label><input type="text" v-model="user.firstname"/><br>
      <label> Last Name: </label><input type="text" v-model="user.lastname" />
      {{ fullName}}
      {{ msg }}
  </div>
</template>

<script>
  export default{
   name: 'app',
   props:{
    msg:{
      type: String,
      default: 'Foobar'
    }
   },
   data(){
    return{
      msg: 'Welcome Brother',
      ola: '<br> ini apa ya',
      user:{
       firstname: 'muhammad',
       lastname: 'yasin'
      },
      showName: true,
      item:[
        {title: 'Item One' },
        {title: 'Item Two'},
        {title: 'Item three'}
      ]
    }
   },
   methods: {
      greet: function(greeting){
        alert(greeting)
      },
      pressKey: function(e){
        console.log(e.target.value);
      },
      enterHit: function(){
        console.log('You hit enter');
      }
   },
   computed:{
    fullName:function(){
      return this.user.firstname+" "+this.user.lastname
    }
   }
  }
</script>

<style scoped>

</style>
