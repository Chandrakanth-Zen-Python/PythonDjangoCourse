
var employee = {
    name: "John Smith",
    job: "Programmer",
    age: 31,
    lastName:function(){
        console.log(this.name.split(' ')[1]) 
    }
  }


function DisplayEmployee(){

    for (k in employee){
        console.log(k+' is '+employee[k])
    }
}
