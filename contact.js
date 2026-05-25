// Navbar
let menuIcon = document.getElementById("menuicon")
let smMenu = document.getElementById("sm__menu")

menuIcon.addEventListener("click", ()=>{
  smMenu.classList.toggle("translate-x-[-100%]")
})


// Footer
let dropIcon = document.querySelectorAll(".drop--icon")
let dropList = document.querySelectorAll(".drop__list")

for(let count=0; count<dropIcon.length; count=count+1){
  dropIcon[count].addEventListener("click", ()=>{
   dropList[count].classList.toggle("hidden")})
};



