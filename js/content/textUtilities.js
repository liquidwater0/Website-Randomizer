let singleWords;

chrome.storage.sync.get({}, items => {
    singleWords = getEnabled("singleWords"); //put single words variable here so it actually gets set properly
    setTimeout(getTextNodes, delay); //put timeout here so it gets delay variable
});

let staticText = [];
let textNodes = [];

function getTextNodes() {
    const treeWalker = document.createTreeWalker(
        document.body, 
        NodeFilter.SHOW_TEXT,
        {
            acceptNode: node => {
                if (
                    node.parentElement.tagName === "SCRIPT" ||
                    node.parentElement.tagName === "STYLE" ||
                    node.parentElement.tagName === "NOSCRIPT" || //Some sites have html in noscript and I don't want that showing up.
                    node.nodeValue.trim() === ""
                ) return NodeFilter.FILTER_SKIP;

                return NodeFilter.FILTER_ACCEPT;
            }
        }
    );
    
    let currentNode = treeWalker.currentNode;
    
    while (currentNode) {
        staticText.push(currentNode.nodeValue);
        textNodes.push(currentNode);
        currentNode = treeWalker.nextNode();
    }

    staticText.shift();
    textNodes.shift();
}

function randomizeText() {
    textNodes.forEach(node => node.nodeValue = getRandomText());
}

function shuffleText() {
    textNodes.forEach(node => node.nodeValue = getShuffledText(node.nodeValue));
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
        .map(({ value }) => value);

    return shuffledText.join(" ");
}