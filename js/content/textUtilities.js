let singleWords;
//This is here so check states load in properly
chrome.storage.sync.get({}, items => singleWords = getEnabled("singleWords"));

function randomizeText(nodes) {
    nodes.forEach(node => node.nodeValue = getRandomText());
}

function shuffleText(nodes) {
    nodes.forEach(node => node.nodeValue = getShuffledText(node.nodeValue));
}

function getRandomText() {
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
