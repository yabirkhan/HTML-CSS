/*let main = document.querySelector("body");
let btn1 = document.querySelector(".myBTN1");
let btn2 = document.querySelector(".myBTN2");

// Callback Function -> Function which is passed as a parameter in another function is called callback function.

let dark =() => {
   main.style.cssText ="background-color:black";
   console.log("fghjm");
   
};
btn1.addEventListener("click",dark);
btn2.addEventListener("click",()=>{
    main.style.cssText = "background-color: white";
    console.log("hello");
    
});
*/


let myBox = document.querySelector(".box");
let myBtn = document.querySelector("#btn");

myBtn.addEventListener("click",()=> myBox.classList.add("c-1"));

myBtn.addEventListener("click",()=> myBox.classList.remove("box"));
myBtn.addEventListener("click",()=> myBox.classList.replace("box","c-2"));
myBtn.addEventListener("click",()=> myBox.classList.toggle("c-2"));