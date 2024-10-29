// LOAD ANIMATIONS

$(function () {
    setTimeout(function () {
        $("#contentProducto").addClass("creaTuCancionAnim");
    }, 450);
});

// LOAD ANIMATIONS

let cardSlider = new Swiper('.card-slider', {
    autoplay: {
        delay: 4000,
        disableOnInteraction: true
    },
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    slidesPerView: 2,
    spaceBetween: 12.5,
    breakpoints: {
        375: {
            slidesPerView: 3,
            spaceBetween: 15
        },
        475: {
            slidesPerView: 3,
            spaceBetween: 15
        },
        575: {
            slidesPerView: 4,
            spaceBetween: 20
        },
        775: {
            slidesPerView: 4.5,
            spaceBetween: 27.5
        },
        975: {
            slidesPerView: 5.5,
            spaceBetween: 35
        },
        1200: {
            slidesPerView: 6,
            spaceBetween: 40
        }
    }
});