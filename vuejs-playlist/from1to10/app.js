new Vue({
  el: '#vue-app',
  data: {
      name: 'Shaun',
      job: 'Ninja',
      age: 25,
      website: 'http://kumparan.com',
      websiteTag: '<a href="http://detik.com"> Detik </a>',
      available: false,
      nearby: false,
      x: 0,
      y: 0,
      a: 0,
      b: 0
  },
  methods: {
    greet: function(time){
      return 'Good '+time +', '+this.name;
    },
    add: function(num){
      this.age+=num;
    },
    subtract: function(num){
      this.age-=num;
    },
    updateXY: function(event){
      console.log(event)
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    logName: function(){

    },
    logAge: function(){

    },
  },
  computed: {
    addToA: function(){
      console.log('add to A');
      return this.a + this.age
    },
    addToB: function(){
      console.log('add to B');
      return this.b + this.age
    },
    compClasses: function(){
        return {
          available: this.available,
          nearby: this.nearby
        }
    }
  }
});
