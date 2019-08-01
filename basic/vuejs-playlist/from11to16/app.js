Vue.component('greeting',{
  template: '<p>Hey there, i am re-usable {{test}}.<button v-on:click="changeTest">Change Test</button></p>',
  data: function(){
    return {
      test: 'Welcome'
    }
  },
  methods:{
    changeTest: function(){
      this.test = 'mario'
    }
  }
});

var zero = new Vue({
  el: "#vue-app",
  data: {
    name: "jack",
    characters: ["mario", "Luigi", "Yoshi", "Bowser"],
    ninjas: [
      {name: "Ryu", age: 25},
      {name: "Yoshi", age: 20},
      {name: "Ken", age: 55}
    ],
    error: false,
    success: false,
    health: 100,
    ended: false
  },
  methods: {
    punch: function(){
      this.health -= 10;
      if (this.health <= 0){
        this.ended = true
        this.health = 0
      }
    },
    restart: function(){
      this.health = 100;
      this.ended = false;
    }
  },
  computed: {

  }

});


var one = new Vue({
  el: '#vue-app-one',
  data: {
    title: 'Vue app one'
  },
  methods: {
    readRefs: function(){
        console.log(this.$refs.input.value);
    }
  },
  computed: {
    greet: function(){
      return "Hello from app one";
    }
  }
});


var two =  new Vue({
  el: '#vue-app-two',
  data: {
    title: 'Vue app two'
  },
  methods: {
    changeTitle: function(){
      one.title = "Title change "
    },
    readRefs: function(){
      console.log(this.$refs.test.value);
    }
  },
  computed: {
    greet: function(){
      return "You Dudes it app 2 speaking to ya";
    }
  }
});
