let checkStatesMap = new Map();

let staticImages = [];
let staticText = [];
let staticClassLists = [];
let staticIDs = [];

chrome.storage.sync.get({
    checkStates: {}
}, items => {
    checkStatesMap = new Map(Object.entries(items.checkStates));
});

function getEnabled(checkbox) {
    const defaultDisabled = ["imageEnabled", "textEnabled", "elementEnabled", "singleWords"];

    if (checkStatesMap.has(checkbox)) {
        return checkStatesMap.get(checkbox);
    } else if (defaultDisabled.some(item => item === checkbox)) {
        return false;
    } else {
        return true;
    }
}

function isAllDisabled() {
    if (!getEnabled("imageEnabled") && !getEnabled("textEnabled") && !getEnabled("elementEnabled")) {
        return true;
    }
}

function randomStyle(property, value) {
    const elements = nodes.elements;

    elements.forEach(element => {
        if (!element || !element.tagName) return;
        element.style[property] = value();
    });
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function removeArrayDuplicates() {
    //https://dev.to/marinamosti/removing-duplicates-in-an-array-of-objects-in-js-with-sets-3fep
    staticImages = [...new Map(staticImages.map(item => [item.src, item])).values()];
    staticText = [...new Set(staticText).keys()];
    staticClassLists = [...new Set(staticClassLists).keys()];
    staticIDs = [...new Set(staticIDs).keys()];
}

//https://www.w3docs.com/snippets/javascript/how-to-convert-rgb-to-hex-and-vice-versa.html
function rgbToHex(red, green, blue) {
    return `#${((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1)}`;
}

function getRandomDate() {
    const randomMonth = getRandomNumber(1, 12);
    const randomDay = getRandomNumber(1, 31);
    const randomYear = getRandomNumber(1900, 2100);
    const randomWeek = getRandomNumber(1, 52);

    const randomHour = getRandomNumber(0, 23);
    const randomMinutes = getRandomNumber(0, 59);
    const randomSeconds = getRandomNumber(0, 59);
    const randomMilliseconds = getRandomNumber(0, 999);
    
    const randomDateISO = new Date(`${randomYear}-${randomMonth}-${randomDay}`);

    const month = String(randomDateISO.getMonth() + 1).padStart(2, "0");
    const day = String(randomDateISO.getDate()).padStart(2, "0");
    const year = String(randomDateISO.getFullYear());
    const week = String(randomWeek).padStart(2, "0");

    const hour = String(randomHour).padStart(2, "0");
    const minutes = String(randomMinutes).padStart(2, "0");
    const seconds = String(randomSeconds).padStart(2, "0");
    const milliseconds = String(randomMilliseconds).padStart(3, "0");

    return {
        month: month,
        day: day,
        year: year,
        week: week,
        hour: hour,
        minutes: minutes,
        seconds: seconds,
        milliseconds: milliseconds
    }
}

function getNodes(nodes) {
    const imageNodes = [];
    const textNodes = [];
    const elementNodes = [];

    nodes.forEach(node => {
        const textWalker = document.createTreeWalker(
            node,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode: node => {
                    const rejectedElements = ["script", "style", "noscript", "title"];

                    if (
                        rejectedElements.some(item => item.toUpperCase() === node.parentElement.tagName) || 
                        node.nodeValue.trim() === ""
                    ) return NodeFilter.FILTER_SKIP;

                    return NodeFilter.FILTER_ACCEPT;
                }
            }
        );

        const elementWalker = document.createTreeWalker(
            node,
            NodeFilter.SHOW_ELEMENT,
            {
                acceptNode: node => {
                    if (node.tagName === "I" && node.classList.contains("material-icons")) return NodeFilter.FILTER_SKIP;
                    return NodeFilter.FILTER_ACCEPT;
                }
            }
        );

        let currentText = textWalker.currentNode;
        let currentElement = elementWalker.currentNode;

        while (currentText) {
            if (currentText.nodeValue) {
                staticText.push(currentText.nodeValue);
                textNodes.push(currentText);
            }

            currentText = textWalker.nextNode();
        }

        while (currentElement) {
            if (currentElement.tagName === "IMG") {
                staticImages.push({
                    src: currentElement.src,
                    srcset: currentElement.srcset,
                    alt: currentElement.alt
                });

                imageNodes.push(currentElement);
            }

            staticClassLists.push(currentElement.classList);
            staticIDs.push(currentElement.id);

            elementNodes.push(currentElement);
            currentElement = elementWalker.nextNode();
        }
    });

    return {
        images: imageNodes,
        text: textNodes,
        elements: elementNodes
    }
}
