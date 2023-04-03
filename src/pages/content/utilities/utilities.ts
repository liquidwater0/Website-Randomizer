import getEnabled from "./getEnabled";
import { 
    staticImages, 
    staticText, 
    staticClassLists, 
    staticIDs,
    updateStaticImages, 
    updateStaticText, 
    updateStaticClassLists, 
    updateStaticIDs 
} from "./nodeUtilities";

export function activate(id: string, callback: () => void) {
    getEnabled(id).then(enabled => {
        if (!enabled) return;
        callback();
    });
}

export async function isAllDisabled() {
    return Promise.all([
        getEnabled("imageEnabled"), 
        getEnabled("textEnabled"),
        getEnabled("elementEnabled")
    ])
    .then(checkedStates => {
        const isAllDisabled = checkedStates.every(item => item === false);
        return isAllDisabled;
    });
}

export function randomStyle(nodes: HTMLElement[], property: any, value: () => any) {
    const elements = [...nodes]; //convert to array so forEach doesn't break if only one element is passed in.

    elements.forEach(element => {
        if (!element || !element.tagName) return;
        element.style[property] = value(); //Value is a function so each element gets different values.
    });
}

export function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function removeArrayDuplicates() {
    //https://dev.to/marinamosti/removing-duplicates-in-an-array-of-objects-in-js-with-sets-3fep
    updateStaticImages([...new Map(staticImages.map(item => [item.src, item])).values()]);
    updateStaticText([...new Set(staticText).keys()]);
    updateStaticClassLists([...new Set(staticClassLists).keys()]);
    updateStaticIDs([...new Set(staticIDs).keys()]);
}

//https://www.w3docs.com/snippets/javascript/how-to-convert-rgb-to-hex-and-vice-versa.html
export function rgbToHex(red: number, green: number, blue: number) {
    return `#${((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1)}`;
}

export function isIcon(element: Element | HTMLElement | Node) {
    return (
        (element as HTMLElement).tagName === "I" && 
        (element as HTMLElement).classList.contains("material-icons")
    );
}

export function getRandomDate() {
    const randomMonth = getRandomNumber(1, 12);
    const randomDay = getRandomNumber(1, 31);
    const randomYear = getRandomNumber(1900, 2100);
    const randomWeek = getRandomNumber(1, 52);

    const randomHour = getRandomNumber(0, 23);
    const randomMinutes = getRandomNumber(0, 59);
    const randomSeconds = getRandomNumber(0, 59);
    const randomMilliseconds = getRandomNumber(0, 999);
    
    const randomDateISO = new Date(`${randomYear}-${randomMonth}-${randomDay}`);

    const month = (randomDateISO.getMonth() + 1).toString().padStart(2, "0");
    const day = randomDateISO.getDate().toString().padStart(2, "0");
    const year = randomDateISO.getFullYear().toString();
    const week = randomWeek.toString().padStart(2, "0");

    const hour = randomHour.toString().padStart(2, "0");
    const minutes = randomMinutes.toString().padStart(2, "0");
    const seconds = randomSeconds.toString().padStart(2, "0");
    const milliseconds = randomMilliseconds.toString().padStart(3, "0");

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