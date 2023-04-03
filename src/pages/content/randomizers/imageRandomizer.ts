import getEnabled from "../utilities/getEnabled";
import { activate, getRandomNumber } from "../utilities/utilities";
import { staticImages, Nodes } from "../utilities/nodeUtilities";

export default function imageRandomizer(nodes: Nodes) {
    getEnabled("imageEnabled").then(enabled => {
        if (!enabled) return;
        randomize(nodes);
    });
}

function randomize({ images }: Nodes) {
    activate("randomImages", () => {
        images.forEach(image => {
            const randomImage = staticImages[Math.floor(Math.random() * staticImages.length)];
            const { src, srcset, alt } = randomImage;

            image.src = src;
            image.srcset = srcset;
            image.alt = alt;
        });
    });

    activate("randomImageHeight", () => {
        images.forEach(image => image.height = getRandomNumber(0, 500));
    });

    activate("randomImageWidth", () => {
        images.forEach(image => image.width = getRandomNumber(0, 500));
    });
}