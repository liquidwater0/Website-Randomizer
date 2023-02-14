import getEnabled from "./getEnabled";
import { staticText } from "./nodeUtilities";

export function randomizeText(nodes) {
    getEnabled("singleWords").then(singleWords => {
        nodes.forEach(node => {
            node.nodeValue = getRandomText(singleWords);
        });
    });
}

export function shuffleText(nodes) {
    //Single words check has to be here so Shuffle Text works with Random Text
    getEnabled("singleWords").then(() => {
        nodes.forEach(node => {
            node.nodeValue = getShuffledText(node.nodeValue)
        });
    });
}

export function getRandomText(singleWords = false) {
    let randomText = staticText[Math.floor(Math.random() * staticText.length)];
    if (!randomText) return "";

    const words = randomText.split(" ");
    if (singleWords) randomText = words[Math.floor(Math.random() * words.length)];

    return randomText;
}

function getShuffledText(text) {
    const words = text.split(" ");
    const shuffledText = words
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
        .join(" ");

    return shuffledText;
}