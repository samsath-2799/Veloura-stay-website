var menuBar = document.getElementById("menubar")
var sideBar = document.getElementById("sidebar")

menuBar.addEventListener("click", ()=>{
    sidebar.classList.toggle("active");
})



let guests = 2;
let children = 0;

// IMAGE DATA

const hotelImages = {

    ocean: [

        "./images/ocean-hotel.jpg",
        "./images/ocean-hotel1.jpg",
        "./images/ocean-hotel2.jpg",
        "./images/ocean-bedroom.jpg"

    ],

    mountain: [

        "./images/mountain-reso.jpg",
        "./images/mountain-reso1.jpg",
        "./images/mountain-reso2.jpg",
        "./images/mountain-bedroom.avif"

    ],

    city: [

        "./images/city-hotel.webp",
        "./images/city-hotel1.avif",
        "./images/city-hotel2.avif",
        "./images/city-bedroom.jpg"

    ],

    luxury: [

        "./images/luxury-hotel.jpg",
        "./images/luxury-hotel2.webp",
        "./images/luxury-hotel3.jpg",
        "./images/luxury-bedroom.jpg"

    ]

};

// SHOW CATEGORY

function showCategory(category) {

    const gallery =
        document.getElementById("gallery");

    gallery.innerHTML = "";

    hotelImages[category].forEach((image) => {

        gallery.innerHTML += `

                <img
                    src="${image}"
                    onclick="changeImage(this)"
                    class="gallery-img w-full h-40 object-cover rounded-2xl cursor-pointer hover:scale-105 transition duration-300 shadow-md">

                `;
    });

    document.getElementById("mainImage").src =
        hotelImages[category][0];
}

// CHANGE IMAGE

function changeImage(image) {

    document.getElementById("mainImage").src =
        image.src;
}

// ADULTS

function increaseGuests() {

    if (guests < 5) {

        guests++;

        document.getElementById("guestCount").innerText =
            guests;

        updatePrice();
    }
}

function decreaseGuests() {

    if (guests > 1) {

        guests--;

        document.getElementById("guestCount").innerText =
            guests;

        updatePrice();
    }
}

// CHILDREN

function increaseChildren() {

    children++;

    document.getElementById("childrenCount").innerText =
        children;

    updatePrice();
}

function decreaseChildren() {

    if (children > 0) {

        children--;

        document.getElementById("childrenCount").innerText =
            children;

        updatePrice();
    }
}

// PRICE CALCULATION

function updatePrice() {

    let roomPrice =
        parseInt(document.getElementById("roomType").value);

    let checkIn =
        new Date(document.getElementById("checkIn").value);

    let checkOut =
        new Date(document.getElementById("checkOut").value);

    let nights = 4;

    if (checkIn && checkOut && checkOut > checkIn) {

        nights = Math.ceil(
            (checkOut - checkIn) /
            (1000 * 60 * 60 * 24)
        );
    }

    document.getElementById("duration").innerText =
        nights;

    let roomTotal =
        roomPrice * nights;

    let extraGuest =
        guests > 1 ? (guests - 1) * 1000 : 0;

    let childrenCharge =
        children * 500;

    let tax =
        Math.floor(roomTotal * 0.08);

    let total =
        roomTotal +
        extraGuest +
        childrenCharge +
        tax;

    document.getElementById("roomPrice").innerText =
        `₹ ${roomTotal.toLocaleString()}`;

    document.getElementById("guestPrice").innerText =
        `₹ ${extraGuest.toLocaleString()}`;

    document.getElementById("childrenPrice").innerText =
        `₹ ${childrenCharge.toLocaleString()}`;

    document.getElementById("taxPrice").innerText =
        `₹ ${tax.toLocaleString()}`;

    document.getElementById("totalPrice").innerText =
        `₹ ${total.toLocaleString()}`;
}

//Special Request
let textArea = document.getElementById("message")
let counter = document.getElementById("counter")
let warning = document.getElementById("warning")

let maxLength = 150

textArea.addEventListener("input", () => {
    let textLength = textArea.value.length
    if (textLength > maxLength) {
        textArea.value = textArea.value.substring(0, maxLength)
        warning.style.display = "block"
    }
    else {
        warning.style.display = "none"
    }



    let currentLength = textArea.value.length
    let remaining = maxLength - currentLength

    counter.textContent = currentLength + " / " + maxLength + " characters "
})

// Guest 

let nameInp = document.getElementById("name")
let emailInp = document.getElementById("email")
let phoneInp = document.getElementById("phone")

let confirmBtn = document.getElementById("confirmBtn")

let nameErr = document.getElementById("name-error")
let emailErr = document.getElementById("email-error")
let phoneErr = document.getElementById("phone-error")

function validateForm() {
    let nameRegex = /^[a-zA-Z]+$/
    let emailRegex = /^[a-zA-Z0-9]+@gmail\.com/
    let phoneRegex = /^[0-9]{10}$/

    let validate = true

    // Name Validation
    if (nameRegex.test(nameInp.value) == false) {

        nameErr.style.display = "inline"
        validate = false
    }
    else {
        nameErr.style.display = "none"
    }
    //Email Validation
    if (emailRegex.test(emailInp.value) == false) {

        emailErr.style.display = "inline"
        validate = false
    }
    else {
        emailErr.style.display = "none"
    }
    //Phone Validation
    if (phoneRegex.test(phoneInp.value) == false) {

        phoneErr.style.display = "inline"
        validate = false
    }
    else {
        phoneErr.style.display = "none"
    }
    //Enable or Disaple Cofirm Button
    if (validate == true) {
        confirmBtn.disabled = false
    }
    else {
        confirmBtn.disabled = true
    }
}

//Real-Time Validation
nameInp.addEventListener("keyup", validateForm)
emailInp.addEventListener("keyup", validateForm)
phoneInp.addEventListener("keyup", validateForm)




// BOOKING

confirmBtn.addEventListener("click", function (event) {
    event.preventDefault()
    alert("Booking Confirmed Successfully!  🎉")
})

// DEFAULT LOAD

showCategory('ocean');

updatePrice();