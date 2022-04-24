chrome.storage.sync.get({}, items => {
    setTimeout(textRandomizer, delay);

    function textRandomizer() {
        if (!getEnabled("textEnabled")) return;

        const inputs = document.querySelectorAll("input:not([type='button'], [type='file'])");

        const fonts = ["Arial", "Helvetica", "sans-serif", "Gadget", "Bookman Old Style", "serif", "Comic Sans MS", "cursive", "Courier", "monospace",
        "Garamond", "Georgia", "Impact", "Charcoal", "Lucida Console", "Monaco", "Lucida Sans Unicode", "Lucida Grande", "MS Sans Serif", "MS Serif", "New York",
        "Palatino Linotype", "Book Antiqua", "Palatino", "Tahoma", "Times New Roman", "Times", "Trebuchet MS", "Verdana"];
        const fontStyles = ["normal", "italic", "oblique"];
        const textAlignModes = ["left", "right", "center", "justify"];
        const textDecorations = ["none", "underline", "overline", "underline overline", "line-through"];
        const textTransformValues = ["none", "capitalize", "uppercase", "lowercase"];
        const verticalAlignValues = ["baseline", "sub", "super", "top", "text-top", "middle", "bottom", "text-bottom"];
        const wordBreakValues = ["keep-all", "break-word", "break-all"];
        
        if (getEnabled("randomPageTitle")) document.title = getRandomText();
        if (getEnabled("randomText")) randomizeText();

        if (getEnabled("randomTextFieldPlaceholders")) {
            inputs.forEach(input => input.placeholder = getRandomText());
        }

        if (getEnabled("randomTextFieldValues")) {
            inputs.forEach(input => input.value = getRandomText());
        }

        if (getEnabled("shuffleText")) shuffleText();

        if (getEnabled("randomFont")) {
            randomStyle("fontFamily", () => fonts[Math.floor(Math.random() * fonts.length)]);
        }

        if (getEnabled("randomFontSize")) {
            randomStyle("fontSize", () => `${getRandomNumber(7, 30)}px`);
        }

        if (getEnabled("randomFontStyle")) {
            randomStyle("fontStyle", () => fontStyles[Math.floor(Math.random() * fontStyles.length)]);
        }

        if (getEnabled("randomFontWeight")) {
            randomStyle("fontWeight", () => getRandomNumber(100, 900));
        }

        if (getEnabled("randomLetterSpacing")) {
            randomStyle("letterSpacing", () => `${getRandomNumber(-1, 5)}px`);
        }

        if (getEnabled("randomLineHeight")) {
            randomStyle("lineHeight", () => `${getRandomNumber(10, 50)}px`);
        }

        if (getEnabled("randomTextAlign")) {
            randomStyle("textAlign", () => textAlignModes[Math.floor(Math.random() * textAlignModes.length)]);
        }

        if (getEnabled("randomTextColor")) {
            randomStyle("color", () => `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`);
        }

        if (getEnabled("randomTextDecoration")) {
            randomStyle("textDecoration", () => textDecorations[Math.floor(Math.random() * textDecorations.length)]);
        }

        if (getEnabled("randomTextIndent")) {
            randomStyle("textIndent", () => `${getRandomNumber(0, 100)}px`);
        }

        if (getEnabled("randomTextSelection")) {
            document.documentElement.setAttribute("data-extension", "websiteRandomizer");

            const randomBackgroundColor = `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`;
            const randomColor = `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`;

            document.documentElement.style.setProperty("--randomBackgroundColor", randomBackgroundColor);
            document.documentElement.style.setProperty("--randomColor", randomColor);
        }

        if (getEnabled("randomTextShadow")) {
            randomStyle("textShadow", () => {
                const randomColor = `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`;
                return `${getRandomNumber(0, 10)}px ${getRandomNumber(0, 10)}px ${getRandomNumber(0, 10)}px ${randomColor}`;
            });
        }

        if (getEnabled("randomTextTransform")) {
            randomStyle("textTransform", () => textTransformValues[Math.floor(Math.random() * textTransformValues.length)]);
        }

        if (getEnabled("randomVerticalAlign")) {
            randomStyle("verticalAlign", () => verticalAlignValues[Math.floor(Math.random() * verticalAlignValues.length)]);
        }

        if (getEnabled("randomWordBreak")) {
            randomStyle("wordBreak", () => wordBreakValues[Math.floor(Math.random() * wordBreakValues.length)]);
        }

        if (getEnabled("randomWordSpacing")) {
            randomStyle("wordSpacing", () => `${getRandomNumber(0, 30)}px`);
        }
    }
});