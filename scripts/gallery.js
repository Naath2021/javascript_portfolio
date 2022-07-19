let images = [
    { id: 0, img: "/images/nature-costanera-butterfly.png", },
    { id: 1, img: "/images/ba-recoleta.png" },
    { id: 2, img: "/images/ba-fac.png" },
    { id: 3, img: "/images/delta-cayena.png" },
    { id: 4, img: "/images/nature-yellow-flower3.png" },
    { id: 5, img: "/images/ba-sky.png" },
    { id: 6, img: "/images/nature-purple-flower.png" },
    { id: 7, img: "/images/nature-mush.png" },
    { id: 8, img: "/images/nature-si-orange-flower.png" },
    { id: 9, img: "/images/ba-flores.png" },
    { id: 10, img: "/images/ba-memory-fadu.png" },
    { id: 11, img: "/images/delta-purple.png" },
    { id: 12, img: "/images/delta-ship-inside.png" },
    { id: 13, img: "/images/nature-si-purple-white.png" },
    { id: 14, img: "/images/ba-day-moon.png" },
    { id: 15, img: "/images/ba-pink-sunset.png" },
    { id: 16, img: "/images/delta-little-bridge.png" },
    { id: 17, img: "/images/delta-cheiru.png" },
    { id: 18, img: "/images/delta-red-flowers.png" },
    { id: 19, img: "/images/nature-dragonfly.png" },
    { id: 20, img: "/images/nature-leaves.png" },
    { id: 21, img: "/images/delta-hidden-house.png" },
    { id: 22, img: "/images/ba-memory.png" },
    { id: 23, img: "/images/delta-ship-window.png" },
    { id: 24, img: "/images/nature-costanera-flower.png" },
    { id: 25, img: "/images/menu-about.png" },
    { id: 26, img: "/images/home-red-flower.png" },
    { id: 27, img: "/images/nature-costanera-fruit.png" },
    { id: 28, img: "/images/menu-contact.png" },
    { id: 29, img: "/images/menu-portfolio.png" },
    { id: 30, img: "/images/delta-musgo.png" },
    { id: 31, img: "/images/nature-delta-pink-flower.png" },
    { id: 32, img: "/images/nature-yellow-flower2.png" },
    { id: 33, img: "/images/ba-si-bird.png" },
    { id: 34, img: "/images/ba-day-moon2.png" },
    { id: 35, img: "/images/head-portfolio.png" },
    { id: 36, img: "/images/delta-tree.png" },
    { id: 37, img: "/images/delta-purple.png" },
    { id: 38, img: "/images/delta-tiny-flowers.png" },
]


let counter = 0;
const slideshowContainer = document.querySelector(".slideshow");
const overlay = document.querySelector(".overlay");
const imgGallery = document.querySelectorAll(".gallery img");
const imgSlideshow = document.querySelector(".slideshow img");
let selectedImg;

slideshowContainer.addEventListener("click", function (event) {
    let previous = slideshowContainer.querySelector(".previous"),
        next = slideshowContainer.querySelector(".next"),
        img = slideshowContainer.querySelector("img"),
        deleteBtn = slideshowContainer.querySelector("#deleteBtn"),
        editBtn = document.getElementById("editBtn"),
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
    } else if (deleteBtn) {

    }
})
Array.from(imgGallery).forEach(img => {
    img.addEventListener("click", event => {
        selectedImg = +event.target.dataset.imgShow
        imgSlideshow.src = images[selectedImg].img
        counter = selectedImg
        overlay.style.opacity = 1
        overlay.style.visibility = "visible"
    })
})

document.querySelector("span").addEventListener("click", () => {
    overlay.style.opacity = 0
    overlay.style.visibility = "hidden"
})


export { images, selectedImg, imgSlideshow, imgGallery }
