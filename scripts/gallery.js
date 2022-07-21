import { Photos, formatDate } from "./CRUD.js"

// Array with all the images 
let images = [
    {
        date: "08/06/2022",
        name: "nature-costanera-butterfly",
        size: 3364,
        id: 0,
        img: "/images/nature-costanera-butterfly.png",
    },
    {
        date: "08/06/2022",
        name: "ba-recoleta",
        size: 1163,
        id: 1,
        img: "/images/ba-recoleta.png"
    },
    {
        date: "08/06/2022",
        name: "ba-fac",
        size: 3364,
        id: 2,
        img: "/images/ba-fac.png"
    },
    {
        date: "08/06/2022",
        name: "delta-cayena",
        size: 270,
        id: 3,
        img: "/images/delta-cayena.png"
    },
    {
        date: "08/06/2022",
        name: "nature-yellow-flower3",
        size: 2728,
        id: 4,
        img: "/images/nature-yellow-flower3.png"
    },
    {
        date: "08/06/2022",
        name: "ba-sky",
        size: 1119,
        id: 5,
        img: "/images/ba-sky.png"
    },
    {
        date: "08/06/2022",
        name: "nature-purple-flower",
        size: 3497,
        id: 6,
        img: "/images/nature-purple-flower.png"
    },
    {
        date: "08/06/2022",
        name: "nature-mush",
        size: 2159, id: 7,
        img: "/images/nature-mush.png"
    },
    {
        date: "08/06/2022",
        name: "nature-si-orange-flower",
        size: 1324,
        id: 8,
        img: "/images/nature-si-orange-flower.png"
    },
    {
        date: "08/06/2022",
        name: "ba-flores",
        size: 3027, id: 9,
        img: "/images/ba-flores.png"
    },
    {
        date: "08/06/2022",
        name: "ba-memory-fadu",
        size: 3223,
        id: 10,
        img: "/images/ba-memory-fadu.png"
    },
    {
        date: "08/06/2022",
        name: "delta-purple",
        size: 264,
        id: 11,
        img: "/images/delta-purple.png"
    },
    {
        date: "08/06/2022",
        name: "delta-ship-inside",
        size: 1473,
        id: 12,
        img: "/images/delta-ship-inside.png"
    },
    {
        date: "08/06/2022",
        name: "nature-si-purple-white",
        size: 1425,
        id: 13,
        img: "/images/nature-si-purple-white.png"
    },
    {
        date: "08/06/2022",
        name: "ba-day-moon",
        size: 2678, id: 14, img: "/images/ba-day-moon.png"
    },
    {
        date: "08/06/2022",
        name: "ba-pink-sunset",
        size: 1216,
        id: 15,
        img: "/images/ba-pink-sunset.png"
    },
    {
        date: "08/06/2022",
        name: "delta-little-bridge",
        size: 2465,
        id: 16,
        img: "/images/delta-little-bridge.png"
    },
    {
        date: "08/06/2022",
        name: "delta-cheiru",
        size: 2271,
        id: 17,
        img: "/images/delta-cheiru.png"
    },
    {
        date: "08/06/2022",
        name: "delta-red-flowers",
        size: 226,
        id: 18,
        img: "/images/delta-red-flowers.png"
    },
    {
        date: "08/06/2022",
        name: "nature-dragonfly",
        size: 1157,
        id: 19,
        img: "/images/nature-dragonfly.png"
    },
    {
        date: "08/06/2022",
        name: "nature-leaves",
        size: 1667,
        id: 20,
        img: "/images/nature-leaves.png"
    },
    {
        date: "08/06/2022",
        name: "delta-hidden-house",
        size: 1929,
        id: 21,
        img: "/images/delta-hidden-house.png"
    },
    {
        date: "08/06/2022",
        name: "ba-memory",
        size: 2830,
        id: 22,
        img: "/images/ba-memory.png"
    },
    {
        date: "08/06/2022",
        name: "delta-ship-window",
        size: 1513,
        id: 23,
        img: "/images/delta-ship-window.png"
    },
    {
        date: "08/06/2022",
        name: "nature-costanera-flower",
        size: 2682,
        id: 24,
        img: "/images/nature-costanera-flower.png"
    },
    {
        date: "08/06/2022",
        name: "menu-about",
        size: 1674,
        id: 25,
        img: "/images/menu-about.png"
    },
    {
        date: "08/06/2022",
        name: "home-red-flower",
        size: 1797,
        id: 26,
        img: "/images/home-red-flower.png"
    },
    {
        date: "08/06/2022",
        name: "nature-costanera-fruit",
        size: 3417,
        id: 27,
        img: "/images/nature-costanera-fruit.png"
    },
    {
        date: "08/06/2022",
        name: "menu-contact",
        size: 2593,
        id: 28,
        img: "/images/menu-contact.png"
    },
    {
        date: "08/06/2022",
        name: "menu-portfolio",
        size: 1338,
        id: 29, img: "/images/menu-portfolio.png"
    },
    {
        date: "08/06/2022",
        name: "delta-musgo",
        size: 2204,
        id: 30,
        img: "/images/delta-musgo.png"
    },
    {
        date: "08/06/2022",
        name: "nature-delta-pink-flower",
        size: 1533,
        id: 31,
        img: "/images/nature-delta-pink-flower.png"
    },
    {
        date: "08/06/2022",
        name: "nature-yellow-flower2",
        size: 2437,
        id: 32,
        img: "/images/nature-yellow-flower2.png"
    },
    {
        date: "08/06/2022",
        name: "ba-si-bird",
        size: 1260,
        id: 33,
        img: "/images/ba-si-bird.png"
    },
    {
        date: "08/06/2022",
        name: "ba-day-moon2",
        size: 3792,
        id: 34,
        img: "/images/ba-day-moon2.png"
    },
    {
        date: "08/06/2022",
        name: "head-portfolio",
        size: 1596,
        id: 35,
        img: "/images/head-portfolio.png"
    },
    {
        date: "08/06/2022",
        name: "delta-tree",
        size: 2264,
        id: 36,
        img: "/images/delta-tree.png"
    },
    {
        date: "08/06/2022",
        name: "delta-away",
        size: 1942,
        id: 37,
        img: "/images/delta-away.png"
    },
    {
        date: "08/06/2022",
        name: "delta-tiny-flowers",
        size: 1425,
        id: 38,
        img: "/images/delta-tiny-flowers.png"
    },
]

// Variables
let counter = 0;
const slideshowContainer = document.querySelector(".slideshow");
const overlay = document.querySelector(".overlay");
const imgGallery = document.querySelectorAll("#gallery img");
const imgSlideshow = document.querySelector(".slideshow img");
const editBtn = document.getElementById("editBtn")
let editName = document.querySelector("#editName")
let editSize = document.querySelector("#editSize")
const saveEditPhoto = document.querySelector("#saveEditPhoto")
let selectedImg;


// CRUD READ: Slideshow overlay with pure JS
slideshowContainer.addEventListener("click", function (event) {
    let previous = slideshowContainer.querySelector(".previous"),
        next = slideshowContainer.querySelector(".next"),
        img = slideshowContainer.querySelector("img"),
        tgt = event.target;

    if (tgt == previous) {
        if (counter > 0) {
            img.src = images[counter - 1].img
            counter--
        } else {
            img.src = images[images.length - 1].img
            counter = images.length - 1
        }
    } else if (tgt == next) {
        if (counter < images.length - 1) {
            img.src = images[counter + 1].img
            counter++
        } else {
            img.src = images[0].img
            counter = 0
        }
    }
})

// Event to show overlay
Array.from(imgGallery).forEach(img => {
    img.addEventListener("click", event => {
        selectedImg = +event.target.dataset.img
        imgSlideshow.src = images[selectedImg].img
        counter = selectedImg
        overlay.style.opacity = 1
        overlay.style.visibility = "visible"
    })
})

// Event to hide overlay
document.querySelector("span").addEventListener("click", () => {
    overlay.style.opacity = 0
    overlay.style.visibility = "hidden"
})

// Event to update/edit
editBtn.addEventListener("click", (e) => {
    overlay.style.opacity = 0
    overlay.style.visibility = "hidden"


    let imgToEdit = images.find(photo => {
        return photo.id == selectedImg
    })
    editName.setAttribute("placeholder", `${imgToEdit.name}`)
    editSize.setAttribute("placeholder", `${imgToEdit.size}`)

})

// Event to save changes 
saveEditPhoto.addEventListener("click", () => {
    let photoUpdated = images.map((img) => {
        if (img.id === selectedImg) {
            img.name = editName.value
            img.size = editSize.value
            editName.setAttribute("placeholder", `${img.name}`)
            editSize.setAttribute("placeholder", `${img.size}`)
        }
        return img;
    })
    editName.value = ""
    editSize.value = ""

    // for orientation:
    console.log(selectedImg) // index of selected img
    console.log(photoUpdated) // array with the changes
})



export { images }
