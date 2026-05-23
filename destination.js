let menubar = document.getElementById("menubar")
let sidebar = document.querySelector(".sidebar")

menubar.addEventListener("click",function() {
    sidebar.style.display = "block"
})

document.getElementById("closebar").addEventListener("click",function(){
    sidebar.style.display = "none"
})

let image = document.getElementById("slider")
let images = ["s1.jpg","s2.jpg","s3.jpg","s4.jpg","s5.jpg",]

setInterval(function(){
    let random = Math.floor(Math.random() *5)
    image.src = images[random]
}, 5000)


var destination = document.getElementById("destination")
var searchbar = document.getElementById("searchbar")
var productlist = destination.querySelectorAll("div")
searchbar.addEventListener("keyup",function(){
    var enteredvalue = event.target.value.toUpperCase()
    
    for( let count = 0; count <     productlist.length; count++){
        var productname =   productlist[count].querySelector("h1").textContent
        
        if( productname.toUpperCase().lastIndexOf(enteredvalue) <0){
            productlist[count].style.display= "none"
        }
        else{
            productlist[count].style.display = "block"
        }
    }
})

let chatmessage = document.querySelector(".chatmessage")
let chatopen = document.getElementById("chatopen")
let chatclose = document.getElementById("chatclose")

chatopen.addEventListener("click", function() {
    chatmessage.style.display = "block"
})

chatclose.addEventListener("click", function(){
    chatmessage.style.display = "none"
})


