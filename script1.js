let name_box=document.getElementById("name");
let email_box=document.getElementById("email");
let password_box=document.getElementById("password");
let button=document.getElementById("btn");

button.addEventListener("click", submit)

function submit(e) {
    e.preventDefault();
    console.log("hello")
    let name = name_box.value;
    let email = email_box.value;
    let password = password_box.value;
    let arr=[];
    let obj={name:name, email:email, password:password}
    arr.push(obj);

    name_box.value='';
    email_box.value='';
    password_box.value='';

    localStorage.setItem("data", JSON.stringify(arr));
}