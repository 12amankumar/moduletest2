let para=document.getElementById("para");
 
let x=JSON.parse(localStorage.getItem("data"));
para.innerHTML=`name:-${x[0].name}   ,
  username:- ${x[0].password}`;
console.log(x);
