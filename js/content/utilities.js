function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let delay;
let checkStatesMap = new Map();

chrome.storage.sync.get({
    randomizerDelay: 1, checkStates: {}
}, items => {
    delay = items.randomizerDelay * 1000;
    checkStatesMap = new Map(Object.entries(items.checkStates));
});

function getEnabled(checkbox) {
    if (checkStatesMap.has(checkbox)) {
        return checkStatesMap.get(checkbox);
    } else if (
        checkbox === "imageEnabled" ||
        checkbox === "textEnabled" || 
        checkbox === "elementEnabled" ||
        checkbox === "singleWords"
    ) {
        return false;
    } else {
        return true;
    }
}

function randomStyle(property, value) {
    const everything = document.querySelectorAll("body *");
    everything.forEach(element => element.style[property] = value());
}