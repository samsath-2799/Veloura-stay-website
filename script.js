// Navbar
let menuBar = document.getElementById("menubar")
let sideBar = document.getElementById("sidebar")

menuBar.addEventListener("click", ()=>{
    sidebar.classList.toggle("active");
})
// Navbar Scrolling
let navBar =
document.querySelector(".navbar")

window.addEventListener("scroll", function(){

   if(window.scrollY > 200){

      navBar.classList.add("scrolled")

   }

   else{

      navBar.classList.remove("scrolled")

   }

})

// Search Functionality
let destination = document.getElementById("destination")
let search = document.getElementById("search")
let destinationList = document.querySelectorAll(".destination__list")

search.addEventListener("keyup", ()=>{
   // destination div display
     destination.style.display = "flex"
   // Searching feature
   let enteredValue = event.target.value.toUpperCase()

   for(count=0; count<destinationList.length; count=count+1){
      if(destinationList[count].textContent.toUpperCase().indexOf(enteredValue)<0){
         destinationList[count].style.display="none"
      }
      else{
         destinationList[count].style.display="block"
      }
   }
})

search.addEventListener("click", ()=>{
   destination.style.display = "none"
})

// Footer
let titles = document.querySelectorAll(".footer__title");

titles.forEach((title) =>{

   title.addEventListener("click", ()=>{

      if(window.innerWidth <= 800){

         let links =
           title.nextElementSibling;
          console.log(links)
        links.classList.toggle("active");

      }

   });

});

// Slider

let slides = document.querySelectorAll(".slide");

let dots = document.querySelectorAll(".dot");

let currentIndex = 0;

dots.forEach(function(dot, index){

   dot.addEventListener("click", ()=>{

      showSlide(index);

   });

});

function showSlide(index){

   slides.forEach(function(slide){

      slide.classList.remove("active");

   });

   dots.forEach(function(dot){

      dot.classList.remove("active-dot");

   });

   slides[index].classList.add("active");

   dots[index].classList.add("active-dot");

   currentIndex = index;

}




