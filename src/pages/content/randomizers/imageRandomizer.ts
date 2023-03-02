import getEnabled from "../utilities/getEnabled";
import { getRandomNumber } from "../utilities/utilities";
import { staticImages, Nodes } from "../utilities/nodeUtilities";

export default function imageRandomizer(nodes: Nodes) {
    getEnabled("imageEnabled").then(enabled => {
        if (!enabled) return;
        randomize(nodes);
    });
}

function randomize({ images }: Nodes) {
    getEnabled("randomImages").then(enabled => {
        if (!enabled) return;

        images.forEach(image => {
            const randomImage = staticImages[Math.floor(Math.random() * staticImages.length)];
            const { src, srcset, alt } = randomImage;

            image.src = src;
            image.srcset = srcset;
            image.alt = alt;
        });
    });

    getEnabled("randomImageHeight").then(enabled => {
        if (!enabled) return;
        images.forEach(image => image.height = getRandomNumber(0, 500));
    });

    getEnabled("randomImageWidth").then(enabled => {
        if (!enabled) return;
        images.forEach(image => image.width = getRandomNumber(0, 500));
    });
}