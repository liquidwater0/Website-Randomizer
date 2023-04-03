import getEnabled from "../utilities/getEnabled";
import { activate, getRandomNumber, getRandomDate, randomStyle } from "../utilities/utilities";
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

    activate("randomPageTitle", () => {
        if (titleChanged) return;

        getEnabled("singleWords").then(singleWords => {
            document.title = getRandomText(singleWords);
        });

        titleChanged = true;
    });

    activate("randomText", () => randomizeText(text));

    activate("randomTextFieldPlaceholders", () => {
        getEnabled("singleWords").then(singleWords => {
            elements.forEach((input: HTMLInputElement | HTMLTextAreaElement) => {
                input.placeholder = getRandomText(singleWords);
            });
        });
    });

    activate("randomTextFieldValues", () => {
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

    activate("shuffleText", () => shuffleText(text));

    activate("randomFont", () => {
        randomStyle(elements, "fontFamily", () => fonts[Math.floor(Math.random() * fonts.length)]);
    });

    activate("randomFontSize", () => {
        randomStyle(elements, "fontSize", () => `${getRandomNumber(7, 30)}px`);
    });

    activate("randomFontStyle", () => {
        randomStyle(elements, "fontStyle", () => fontStyles[Math.floor(Math.random() * fontStyles.length)]);
    });

    activate("randomFontWeight", () => {
        randomStyle(elements, "fontWeight", () => getRandomNumber(100, 900));
    });

    activate("randomLetterSpacing", () => {
        randomStyle(elements, "letterSpacing", () => `${getRandomNumber(-1, 5)}px`);
    });

    activate("randomLineHeight", () => {
        randomStyle(elements, "lineHeight", () => `${getRandomNumber(10, 50)}px`);
    });

    activate("randomTextAlign", () => {
        randomStyle(elements, "textAlign", () => textAlignModes[Math.floor(Math.random() * textAlignModes.length)]);
    });

    activate("randomTextColor", () => {
        randomStyle(elements, "color", () => `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`);
    });

    activate("randomTextDecoration", () => {
        randomStyle(elements, "textDecoration", () => textDecorations[Math.floor(Math.random() * textDecorations.length)]);
    });

    activate("randomTextIndent", () => {
        randomStyle(elements, "textIndent", () => `${getRandomNumber(0, 100)}px`);
    });

    activate("randomTextSelection", () => {
        if (!textSelectActivated) {
            textSelectActivated = true;

            document.documentElement.setAttribute("data-extension", "websiteRandomizer");

            const randomBackgroundColor = `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`;
            const randomColor = `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`;

            document.documentElement.style.setProperty("--randomBackgroundColor", randomBackgroundColor);
            document.documentElement.style.setProperty("--randomColor", randomColor);
        }
    });

    activate("randomTextShadow", () => {
        randomStyle(elements, "textShadow", () => {
            const randomColor = `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`;
            return `${getRandomNumber(0, 10)}px ${getRandomNumber(0, 10)}px ${getRandomNumber(0, 10)}px ${randomColor}`;
        });
    });

    activate("randomTextTransform", () => {
        randomStyle(elements, "textTransform", () => textTransformValues[Math.floor(Math.random() * textTransformValues.length)]);
    });

    activate("randomVerticalAlign", () => {
        randomStyle(elements, "verticalAlign", () => verticalAlignValues[Math.floor(Math.random() * verticalAlignValues.length)]);
    });

    activate("randomWordBreakType", () => {
        randomStyle(elements, "wordBreak", () => wordBreakValues[Math.floor(Math.random() * wordBreakValues.length)]);
    });

    activate("randomWordSpacing", () => {
        randomStyle(elements, "wordSpacing", () => `${getRandomNumber(0, 30)}px`);
    });
}