let para=document.getElementById("para");
let Button=document.getElementById("btn");

Button.addEventListener("click", Click);

function Click(event){
    event.preventDefault();
    let arr=["1","2","3","4","5","6","7","8","9","0","A", "B", "C", "D", "E", "F" ,"G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","@","#","%","&"];
    let coupnecode="";
    for(let i=0;i<12;i++){
        let random_index=arr[Math.floor(Math.random()*arr.length)];
        console.log(random_index);
        coupnecode += random_index;
    }

   para.innerHTML ="Your coupon code :-"+ " "+" "+coupnecode;
let img=document.getElementById("img");
  img.src="https://img.freepik.com/free-vector/card-template-with-fireworks-party-horns_1308-3021.jpg?w=2000";
  img.style.height="300px";
  img.style.width="500px";
  
}
  
  
