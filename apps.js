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
  // data:{
  //   content:'',
  //   vehicle: ['car','motorcycle','bike']
  // },
  // methods:{
  //   add: function(){
  //     this.vehicle.push(this.content)
  //     this.content = ''
  //   }
  // }

  // <!-- =========== remove array value =========== -->
  data:{
    content:'',
    vehicle: ['car','motorcycle','bike']
  },
  methods:{
    add: function(){
      this.vehicle.push(this.content)
      this.content = ''
    },
    deleteEvent(index){
      this.vehicle.splice(index, 1);
    }
  }

  // <!-- =========== array multivalue =========== -->
  // data:{
  //   vehicle: [
  //     {type:'car', merk:'toyota', color:'black'},
  //     {type:'motorcycle', merk:'honda', color:'red'},
  //     {type:'bike', merk:'polygon', color:'blue'},
  //   ]
  // }
})
