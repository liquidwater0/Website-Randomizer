function imageRandomizer({ images }) {
    if (getEnabled("randomImages")) {
        images.forEach(image => {
            const randomImage = staticImages[Math.floor(Math.random() * staticImages.length)];
            const { src, srcset, alt } = randomImage;

            image.src = src;
            image.srcset = srcset;
            image.alt = alt;
        });
    }

    if (getEnabled("randomImageHeight")) {
        images.forEach(image => image.height = getRandomNumber(0, 500));
    }

    if (getEnabled("randomImageWidth")) {
        images.forEach(image => image.width = getRandomNumber(0, 500));
    }
}