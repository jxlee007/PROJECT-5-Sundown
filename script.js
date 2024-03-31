const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});
// ------------------------------------------
swiper = () => {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        loop: true,
        centeredSlides: true,
        spaceBetween: 100,
    });
}
swiper();
// ------------------------------------------
h1 = () => {
    var h1s = document.querySelectorAll('.cntpart1 h1');
    var p = document.querySelector('.cntpart1 p');
    var img = document.querySelector('.cntpart2');

    // h1s.addEventListener("click",function(){
    //     h1s.style.borderLeft = '6px solid orangered';
    //     h1s.style.color = 'lightgray';
    // })

    h1s.forEach(function (h1) {

        var text = h1.getAttribute("data-text")
        var image = h1.getAttribute("data-src")

        h1.addEventListener('click', function () {
            p.textContent = text;
            img.style.backgroundImage = `url(${image})`
        });
    });
}
h1();
// --------------------------------------------
page4 = () => {
    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed")
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "flex"
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`

            var video = e.getAttribute("data-video")
            fixed.innerHTML = `<video autoplay loop muted src="${video}" type="video/mp4"></video>`;

        })
    })
}

if (window.innerWidth > 768) { // 768px is a common breakpoint for mobile devices
    page4();
}

// -------------------------------------------------------

menu = ()=> {
    var menu = document.querySelector("nav h3")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var close = document.querySelector("#close")
    menu.addEventListener("click", function () {
            full.style.top = 0
            full.style.opacity = 1
            navimg.style.opacity = 0
    })

    close.addEventListener("click", function(){
        full.style.top = "-100%"
        full.style.opacity = 0
        navimg.style.opacity = 1
    })
}
menu();
// --------------------------------------------------------

loader = ()=> {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}
loader();
