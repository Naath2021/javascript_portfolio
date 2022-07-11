document.addEventListener("DOMContentLoaded", function () {
    let images = [
        { img: "/images/nature-costanera-butterfly.png" },
        { img: "/images/ba-recoleta.png" },
        { img: "/images/ba-fac.png" },
        { img: "/images/delta-cayena.png" },
        { img: "/images/nature-yellow-flower3.png" },
        { img: "/images/ba-sky.png" },
        { img: "/images/nature-purple-flower.png" },
        { img: "/images/nature-mush.png" },
        { img: "/images/nature-si-orange-flower.png" },
        { img: "/images/ba-flores.png" },
        { img: "/images/ba-memory-fadu.png" },
        { img: "/images/delta-purple.png" },
        { img: "/images/delta-ship-inside.png" },
        { img: "/images/nature-si-purple-white.png" },
        { img: "/images/ba-day-moon.png" },
        { img: "/images/ba-pink-sunset.png" },
        { img: "/images/delta-little-bridge.png" },
        { img: "/images/delta-cheiru.png" },
        { img: "/images/delta-red-flowers.png" },
        { img: "/images/nature-dragonfly.png" },
        { img: "/images/nature-leaves.png" },
        { img: "/images/delta-hidden-house.png" },
        { img: "/images/ba-memory.png" },
        { img: "/images/delta-ship-window.png" },
        { img: "/images/nature-costanera-flower.png" },
        { img: "/images/menu-about.png" },
        { img: "/images/home-red-flower.png" },
        { img: "/images/nature-costanera-fruit.png" },
        { img: "/images/menu-contact.png" },
        { img: "/images/menu-portfolio.png" },
        { img: "/images/delta-musgo.png" },
        { img: "/images/nature-delta-pink-flower.png" },
        { img: "/images/nature-yellow-flower2.png" },
        { img: "/images/ba-si-bird.png" },
        { img: "/images/ba-day-moon2.png" },
        { img: "/images/head-portfolio.png" },
        { img: "/images/delta-tree.png" },
        { img: "/images/delta-tiny-flowers.png" },
    ]
    let counter = 0;
    const slideshowContainer = document.querySelector(".slideshow");
    const overlay = document.querySelector(".overlay");
    const imgGallery = document.querySelectorAll(".gallery img");
    const imgSlideshow = document.querySelector(".slideshow img");

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
    Array.from(imgGallery).forEach(img => {
        img.addEventListener("click", event => {
            const selectedImg = +event.target.dataset.imgShow
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
})

