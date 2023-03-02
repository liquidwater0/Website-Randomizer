import getEnabled from "../utilities/getEnabled";
import { getRandomNumber, getRandomDate, randomStyle } from "../utilities/utilities";
import { getRandomText, randomizeText, shuffleText } from "../utilities/textUtilities";
import { Nodes } from "../utilities/nodeUtilities";

let titleChanged: boolean = false;
let textSelectActivated: boolean = false;

export default function textRandomizer(nodes: Nodes) {
    getEnabled("textEnabled").then(enabled => {
        if (!enabled) return;
        randomize(nodes);
    });
}

function randomize({ text, elements }: Nodes) {
    const fonts = ["Arial", "Helvetica", "sans-serif", "Gadget", "Bookman Old Style", "serif", "Comic Sans MS", "cursive", "Courier", "monospace",
    "Garamond", "Georgia", "Impact", "Charcoal", "Lucida Console", "Monaco", "Lucida Sans Unicode", "Lucida Grande", "MS Sans Serif", "MS Serif", "New York",
    "Palatino Linotype", "Book Antiqua", "Palatino", "Tahoma", "Times New Roman", "Times", "Trebuchet MS", "Verdana"];
    const fontStyles = ["normal", "italic", "oblique"];
    const textAlignModes = ["left", "right", "center", "justify"];
    const textDecorations = ["none", "underline", "overline", "underline overline", "line-through"];
    const textTransformValues = ["none", "capitalize", "uppercase", "lowercase"];
    const verticalAlignValues = ["baseline", "sub", "super", "top", "text-top", "middle", "bottom", "text-bottom"];
    const wordBreakValues = ["keep-all", "break-word", "break-all"];

    getEnabled("randomDates").then(enabled => {
        if (!enabled) return;

        elements.forEach((input: HTMLInputElement) => {
            if (input.tagName !== "INPUT") return;

            if (input.type === "date") {
                const { month, day, year } = getRandomDate();
                input.value = `${year}-${month}-${day}`;
            }

            if (input.type === "datetime-local") {
                const { month, day, year, hour, minutes, seconds, milliseconds } = getRandomDate();
                input.value = `${year}-${month}-${day}T${hour}:${minutes}:${seconds}.${milliseconds}`;
            }

            if (input.type === "month") {
                const { month, year } = getRandomDate();
                input.value = `${year}-${month}`;
            }

            if (input.type === "time") {
                const { hour, minutes, seconds, milliseconds } = getRandomDate();
                input.value = `${hour}:${minutes}:${seconds}.${milliseconds}`;
            }

            if (input.type === "week") {
                const { year, week } = getRandomDate();
                input.value = `${year}-W${week}`;
            }
        });
    });

    getEnabled("randomPageTitle").then(enabled => {
        if (!enabled) return;
        if (titleChanged) return;

        getEnabled("singleWords").then(singleWords => {
            document.title = getRandomText(singleWords);
        });

        titleChanged = true;
    });

    getEnabled("randomText").then(enabled => {
        if (!enabled) return;
        randomizeText(text);
    });

    getEnabled("randomTextFieldPlaceholders").then(enabled => {
        if (!enabled) return;

        getEnabled("singleWords").then(singleWords => {
            elements.forEach((input: HTMLInputElement | HTMLTextAreaElement) => {
                input.placeholder = getRandomText(singleWords);
            });
        });
    });

    getEnabled("randomTextFieldValues").then(enabled => {
        if (!enabled) return;

        getEnabled("singleWords").then(singleWords => {
            elements.forEach((input: HTMLInputElement | HTMLTextAreaElement) => {
                const textFieldInputs = ["email", "password", "search", "tel", "text", "url"];

                if (textFieldInputs.some(type => input.type === type) || input.tagName === "TEXTAREA") {
                    input.value = getRandomText(singleWords);
                }
                
                if (input.type === "number") input.value = getRandomNumber(0, 100).toString();
            });
        });
    });

    getEnabled("shuffleText").then(enabled => {
        if (!enabled) return;
        shuffleText(text);
    });

    getEnabled("randomFont").then(enabled => {
        if (!enabled) return;
        randomStyle(elements, "fontFamily", () => fonts[Math.floor(Math.random() * fonts.length)]);
    });

    getEnabled("randomFontSize").then(enabled => {
        if (!enabled) return;
        randomStyle(elements, "fontSize", () => `${getRandomNumber(7, 30)}px`);
    });

    getEnabled("randomFontStyle").then(enabled => {
        if (!enabled) return;
        randomStyle(elements, "fontStyle", () => fontStyles[Math.floor(Math.random() * fontStyles.length)]);
    });

    getEnabled("randomFontWeight").then(enabled => {
        if (!enabled) return;
        randomStyle(elements, "fontWeight", () => getRandomNumber(100, 900));
    });

    getEnabled("randomLetterSpacing").then(enabled => {
        if (!enabled) return;
        randomStyle(elements, "letterSpacing", () => `${getRandomNumber(-1, 5)}px`);
    });

    getEnabled("randomLineHeight").then(enabled => {
        if (!enabled) return;
        randomStyle(elements, "lineHeight", () => `${getRandomNumber(10, 50)}px`);
    });

    getEnabled("randomTextAlign").then(enabled => {
        if (!enabled) return;
        randomStyle(elements, "textAlign", () => textAlignModes[Math.floor(Math.random() * textAlignModes.length)]);
    });

    getEnabled("randomTextColor").then(enabled => {
        if (!enabled) return;
        randomStyle(elements, "color", () => `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`);
    });

    getEnabled("randomTextDecoration").then(enabled => {
        if (!enabled) return;
        randomStyle(elements, "textDecoration", () => textDecorations[Math.floor(Math.random() * textDecorations.length)]);
    });

    getEnabled("randomTextIndent").then(enabled => {
        if (!enabled) return;
        randomStyle(elements, "textIndent", () => `${getRandomNumber(0, 100)}px`);
    });

    getEnabled("randomTextSelection").then(enabled => {
        if (!enabled) return;
        
        if (!textSelectActivated) {
            textSelectActivated = true;

            document.documentElement.setAttribute("data-extension", "websiteRandomizer");

            const randomBackgroundColor = `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`;
            const randomColor = `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`;

            document.documentElement.style.setProperty("--randomBackgroundColor", randomBackgroundColor);
            document.documentElement.style.setProperty("--randomColor", randomColor);
        }
    });

    getEnabled("randomTextShadow").then(enabled => {
        if (!enabled) return;
        
        randomStyle(elements, "textShadow", () => {
            const randomColor = `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`;
            return `${getRandomNumber(0, 10)}px ${getRandomNumber(0, 10)}px ${getRandomNumber(0, 10)}px ${randomColor}`;
        });
    });

    getEnabled("randomTextTransform").then(enabled => {
        if (!enabled) return;
        randomStyle(elements, "textTransform", () => textTransformValues[Math.floor(Math.random() * textTransformValues.length)]);
    });

    getEnabled("randomVerticalAlign").then(enabled => {
        if (!enabled) return;
        randomStyle(elements, "verticalAlign", () => verticalAlignValues[Math.floor(Math.random() * verticalAlignValues.length)]);
    });

    getEnabled("randomWordBreakType").then(enabled => {
        if (!enabled) return;
        randomStyle(elements, "wordBreak", () => wordBreakValues[Math.floor(Math.random() * wordBreakValues.length)]);
    });

    getEnabled("randomWordSpacing").then(enabled => {
        if (!enabled) return;
        randomStyle(elements, "wordSpacing", () => `${getRandomNumber(0, 30)}px`);
    });
}