chrome.storage.sync.get({}, items => {
    setTimeout(imageRandomizer, delay);

    function imageRandomizer() {
        if (!getEnabled("imageEnabled")) return;

        const images = document.querySelectorAll("img");

        if (getEnabled("randomImages")) {
            images.forEach(image => {
                const randomImage = images[Math.floor(Math.random() * images.length)];

                image.src = randomImage.src;
                image.srcset = randomImage.srcset;
                image.alt = randomImage.alt;
            });
        }

        if (getEnabled("randomImageHeight")) {
            images.forEach(image => image.height = getRandomNumber(0, 500));
        }

        if (getEnabled("randomImageWidth")) {
            images.forEach(image => image.width = getRandomNumber(0, 500));
        }
    }
});