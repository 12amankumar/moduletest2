let img = document.getElementById("img");
let button = document.getElementById("btn");


button.addEventListener("click", third);
let one=0;
let data = 0;
let sum=0;
function third(e) {
  e.preventDefault();

  setTimeout(function () {
    if (data < 3) {
   
      let num = Math.floor(Math.random() * 6) + 1;
      img.setAttribute("src", "d" + num + ".png");
      // data++;
    
      sum+=num;
      console.log(sum);
      if(data==2){
        if(sum<10){
         document.getElementById("sum").innerHTML="Refresh and try again";
          //show button to restart
      }
      else {
        document.getElementById("sum").innerHTML="Click on fourth image and create a coupon";
      }
     
      }
     
    
      document.getElementById("span").innerHTML="Sum of events:-  " + sum;

  }
  data++;
  // else if(data===3){
  //   if(sum>10){
  //     console.log("hello");
  //   }
  //   else{
  //     console.log("byy");
  //   }
  // }
    //   if(sum<10){
    //    if(one<3){
    //     let second=Math.floor(Math.random() *6)+1;
    //     img.setAttribute("src", "d" + second + ".png");
    //     one++;
    //    }
       
      
    //   }

    // if(sum<10){
    //  return third(e);
    // }
    // else{
    //     alert("Bad luck");
    // }
    
  }, 50);
}
