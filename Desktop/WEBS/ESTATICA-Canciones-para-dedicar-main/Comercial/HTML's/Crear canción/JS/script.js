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

document.addEventListener('DOMContentLoaded', function() {
    const moodTypes = ['romantica', 'entranable', 'divertida', 'graciosa', 'detodo', 'nostalgica'];
    
    const moodPairs = {};
    
    moodTypes.forEach(type => {
        moodPairs[type] = {
            radio1: document.getElementById(`${type}-1`),
            radio2: document.getElementById(`${type}-2`),
            container1: document.getElementById(`${type}-1`).nextElementSibling,
            container2: document.getElementById(`${type}-2`).nextElementSibling
        };
    });

    function updatePairStyles(type, isChecked) {
        const pair = moodPairs[type];
        
        if (isChecked) {
            pair.container1.style.background = '#d06b81';
            pair.container1.style.color = 'white';
            pair.container2.style.background = '#d06b81';
            pair.container2.style.color = 'white';
            
            pair.radio1.checked = true;
            pair.radio2.checked = true;
        } else {
            pair.container1.style.background = '';
            pair.container1.style.color = '';
            pair.container2.style.background = '';
            pair.container2.style.color = '';
        }
    }

    function clearOtherPairs(selectedType) {
        moodTypes.forEach(type => {
            if (type !== selectedType) {
                updatePairStyles(type, false);
            }
        });
    }

    moodTypes.forEach(type => {
        const pair = moodPairs[type];

        pair.radio1.addEventListener('change', function() {
            if (this.checked) {
                clearOtherPairs(type);
                updatePairStyles(type, true);
            }
        });

        pair.radio2.addEventListener('change', function() {
            if (this.checked) {
                clearOtherPairs(type);
                updatePairStyles(type, true);
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const genreTypes = ['pop-rock', 'hip-hop', 'bachata', 'reggaeton', 'heavy-metal'];
    const genrePairs = {};
    
    genreTypes.forEach(type => {
        genrePairs[type] = {
            radio1: document.getElementById(`${type}-genre-1`),
            radio2: document.getElementById(`${type}-genre-2`),
            container1: document.getElementById(`${type}-genre-1`).nextElementSibling,
            container2: document.getElementById(`${type}-genre-2`).nextElementSibling
        };
    });

    function updatePairStyles(type, isChecked) {
        const pair = genrePairs[type];
        if (isChecked) {
            pair.container1.style.background = '#d06b81';
            pair.container1.style.color = 'white';
            pair.container2.style.background = '#d06b81';
            pair.container2.style.color = 'white';
            pair.radio1.checked = true;
            pair.radio2.checked = true;
        } else {
            pair.container1.style.background = '';
            pair.container1.style.color = '';
            pair.container2.style.background = '';
            pair.container2.style.color = '';
        }
    }

    function clearOtherPairs(selectedType) {
        genreTypes.forEach(type => {
            if (type !== selectedType) {
                updatePairStyles(type, false);
            }
        });
    }

    genreTypes.forEach(type => {
        const pair = genrePairs[type];
        pair.radio1.addEventListener('change', function() {
            if (this.checked) {
                clearOtherPairs(type);
                updatePairStyles(type, true);
            }
        });

        pair.radio2.addEventListener('change', function() {
            if (this.checked) {
                clearOtherPairs(type);
                updatePairStyles(type, true);
            }
        });
    });

    const popPair = {
        radio1: document.getElementById('pop-genre'),
        radio2: document.getElementById('pop-genre-1'),
        container1: document.getElementById('pop-genre').nextElementSibling,
        container2: document.getElementById('pop-genre-1').nextElementSibling
    };

    function updatePopStyles(isChecked) {
        if (isChecked) {
            popPair.container1.style.background = '#d06b81';
            popPair.container1.style.color = 'white';
            popPair.container2.style.background = '#d06b81';
            popPair.container2.style.color = 'white';
            popPair.radio1.checked = true;
            popPair.radio2.checked = true;
        } else {
            popPair.container1.style.background = '';
            popPair.container1.style.color = '';
            popPair.container2.style.background = '';
            popPair.container2.style.color = '';
        }
    }

    popPair.radio1.addEventListener('change', function() {
        if (this.checked) {
            clearOtherPairs('pop');
            updatePopStyles(true);
        }
    });

    popPair.radio2.addEventListener('change', function() {
        if (this.checked) {
            clearOtherPairs('pop');
            updatePopStyles(true);
        }
    });
});