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

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
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
