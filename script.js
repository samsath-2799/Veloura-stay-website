var menuBar = document.getElementById("menubar")
var sideBar = document.getElementById("sidebar")

menuBar.addEventListener("click", ()=>{
    sidebar.classList.toggle("active");
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


