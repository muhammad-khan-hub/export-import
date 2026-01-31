let mobile_menu=document.querySelector(".mobile_menu");
let mobile_menu_list=document.querySelectorAll(".mobile_menu_list")
let open=document.querySelector(".open");
let close=document.querySelector(".close");
let header=document.querySelector("header");

open.addEventListener("click",()=>{
mobile_menu.classList.remove("hidden")
})
close.addEventListener("click",()=>{
mobile_menu.classList.add("hidden")
})
mobile_menu_list.forEach((elem) => {
  elem.addEventListener("click",()=>{
  mobile_menu.classList.add("hidden")
  })
});


window.addEventListener("scroll", () => {
 if(window.scrollY > 50){
  header.classList.add("fixed")
 }else{
  header.classList.remove("fixed")
 }
})
