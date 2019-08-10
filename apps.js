var app = new Vue({
  el:'#app',

  // <!-- =========== show 1 array value =========== -->
  // data:{
  //   vehicle:['car','motorcycle','bike']
  // }

  // <!-- =========== show all array value =========== -->
  // data:{
  //   vehicle:['car','motorcycle','bike']
  // }

  // <!-- =========== add array value =========== -->
  data:{
    content:'',
    vehicle: ['car','motorcycle','bike']
  },
  methods:{
    add: function(){
      this.vehicle.push(this.content)
      this.content = ''
    }
  }
  
})
