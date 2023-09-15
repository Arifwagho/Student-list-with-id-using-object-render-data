



var student1 = {
    firstName: "Akif",
    lastName: "Malik",
    age: 29,
    id: Math.random().toFixed(6)*1000000,
  };
  
  var student2 = {
    firstName: "Faisal",
    lastName: "Thebo",
    age: 32,
    id: Math.random().toFixed(6)*1000000,
  };
  var student3 = {
    firstName: "Asghar",
    lastName: "Ali",
    age: 22,
    id: Math.random().toFixed(6)*1000000,
  };
  var student4 = {
    firstName: "Ali",
    lastName: "Hasan",
    age: 35,
    id: Math.random().toFixed(6)*1000000,
  };
  var student5 = {
    firstName: "Faizan",
    lastName: "Bhanbhro",
    age: 19,
    id: Math.random().toFixed(6)*1000000,
  };

  var student6 = {
    firstName: "Aziz",
    lastName: "Thari",
    age: 32,
    id: Math.random().toFixed(6)*1000000,
  };

  var student7= {
    firstName: "AboBakar",
    lastName: "Thari",
    age: 45,
    id: Math.random().toFixed(6)*1000000,
  };
  var student8 = {
    firstName: "Faizan",
    lastName: "Alwi",
    age: 15,
    id: Math.random().toFixed(6)*1000000,
  };

  var student9 = {
    firstName: "Fareed",
    lastName: "Waleed",
    age: 27,
    id: Math.random().toFixed(6)*1000000,
  };
  
  var student10 = {
    firstName: "Arslan",
    lastName: "Kareem",
    age: 38,
    id: Math.random().toFixed(6)*1000000,
    
  };

  var student11 = {
    firstName: "AboBakar",
    lastName: "Thari",
    age: 45,
    id: Math.random().toFixed(6)*1000000,
    
  };

  var student12 = {
    firstName: "Arslan",
    lastName: "Kareem",
    age: 38,
    id: Math.random().toFixed(6)*1000000,
    
  };

  var student13 = {
    firstName: "Asghar",
    lastName: "Ali",
    age: 22,
    id: Math.random().toFixed(6)*1000000,
    
  };

  var student14 = {
    firstName: "AboBakar",
    lastName: "Thari",
    age: 45,
    id: Math.random().toFixed(6)*1000000,
    
  };

  var student15 = {
    firstName: "Arslan",
    lastName: "Kareem",
    age: 38,
    id: Math.random().toFixed(6)*1000000,
    
  };
  var studentList= [student1,student2,student3,student4,student5,student6,student7,student8,student9,student10,student11,student12,student13,student14,student15];
  var tableBody = document.getElementById("tBody");
  function rendor(){
tableBody.innerHTML="";
for (var i=0;i<studentList.length;i++){
tableBody.innerHTML +=`<tr> <div class="tD"><td> ${i+1}</td> <td>${studentList[i].firstName} </td> 
<td> ${studentList[i].lastName } </td>     
<td> ${studentList[i].age} </td>   <td> ${studentList[i].id} </td>                             </div> </tr> `

}


  }
  rendor();
