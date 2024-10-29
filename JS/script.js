(function () {
    window.flickityLoaded = window.flickityLoaded || {};

    window.loadVideos = window.loadVideos || function (e) {
        document.addEventListener("DOMContentLoaded", () => {
            const createVideoElement = (wrapper) => {
                const video = document.createElement("video");
                video.controls = true;
                video.autoplay = true;
                video.muted = true;
                video.loop = true;
                video.playsInline = true;
                video.classList.add("ce-video__item");

                const source = document.createElement("source");
                source.src = wrapper.getAttribute("src"); // Cambiado a src
                source.type = "video/mp4";
                video.appendChild(source);
                wrapper.appendChild(video);
            };

            document.querySelectorAll(`#${e} .ce-video__item--wrapper`).forEach(createVideoElement);
            console.log("Videos displayed");
        });
    };

    window.loadFlickityScript = window.loadFlickityScript || function () {
        return new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = "https://cdn.jsdelivr.net/npm/flickity@2/dist/flickity.pkgd.min.js";
            script.onload = () => resolve();
            script.onerror = (error) => reject(error);
            document.body.appendChild(script);
        });
    };

    window.initializeFlickity = window.initializeFlickity || function (id) {
        document.querySelectorAll(".main-carousel").forEach(carousel => {
            const carouselId = carousel.closest("[id]").id;
            if (!window.flickityLoaded[carouselId]) {
                new Flickity(carousel, {
                    cellAlign: "left",
                    contain: true,
                    prevNextButtons: true,
                    draggable: true,
                    pageDots: false,
                    freeScroll: true,
                    wrapAround: true,
                    arrowShape: {
                        x0: 20,
                        x1: 60,
                        y1: 40,
                        x2: 60,
                        y2: 35,
                        x3: 25
                    }
                });
                carousel.style.visibility = "visible";
                window.flickityLoaded[carouselId] = true;
            }
        });
    };

    const carousels = document.querySelectorAll(".main-carousel");
    carousels.forEach(carousel => {
        const carouselId = carousel.closest("[id]").id;
        loadFlickityScript()
            .then(() => {
                initializeFlickity(carouselId);
            })
            .catch(error => console.error("Error loading Flickity script:", error));

        loadVideos(carouselId);
    });
})();