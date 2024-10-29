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

$(function() {
    const items = [
        { trigger: '.touch-add-info-one', target: '.add-info-one' },
        { trigger: '.touch-add-info-two', target: '.add-info-two' },
        { trigger: '.touch-add-info-three', target: '.add-info-three' },
        { trigger: '.touch-add-info-four', target: '.add-info-four' }
    ];

    function handleClick(triggerSelector, targetSelector) {
        $(triggerSelector).on('click', function(e) {
            e.preventDefault();
            const $target = $(targetSelector);
            const $svg = $(this).find('img.toggle-svg');
            
            $target.toggleClass('add-info-get');
            $svg.attr('src', $target.hasClass('add-info-get') ? 'IMG/minus.svg' : 'IMG/plus.svg');
        });
    }

    items.forEach(item => handleClick(item.trigger, item.target));
});