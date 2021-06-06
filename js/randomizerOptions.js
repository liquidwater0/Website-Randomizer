const manifest = chrome.runtime.getManifest();
const version = document.getElementById("optionsVersion");
const themeSwitch = document.getElementById("themeSwitch");
const html = document.querySelector("html");

version.textContent = `Website Randomizer v${manifest.version}`;

document.addEventListener("DOMContentLoaded", get);
document.getElementById("saveButton").addEventListener("click", save);

document.getElementById("scrollImage").addEventListener("click", function() {
    document.getElementById("imageRandomizer").scrollIntoView();
});

document.getElementById("scrollText").addEventListener("click", function() {
    document.getElementById("textRandomizer").scrollIntoView();
});

document.getElementById("scrollElement").addEventListener("click", function() {
    document.getElementById("elementRandomizer").scrollIntoView();
});

document.getElementById("scrollOptions").addEventListener("click", function() {
    document.getElementById("randomizerOptions").scrollIntoView();
});

document.getElementById("scrollUI").addEventListener("click", function() {
    document.getElementById("uiOptions").scrollIntoView();
});

themeSwitch.addEventListener("input", function() {
    chrome.storage.sync.set({"themeSwitchChecked": themeSwitch.checked});

    chrome.storage.sync.get({themeSwitchChecked: true}, function(items) {
        if (items.themeSwitchChecked == true) {
            darkMode();
        } else {
            lightMode();
        }
    });
});

function lightMode() {
    html.setAttribute("data-theme", "light");
    saveTheme();
}

function darkMode() {
    html.setAttribute("data-theme", "dark");
    saveTheme();
}

function saveTheme() {
    chrome.storage.sync.set({"currentTheme": html.getAttribute("data-theme")});
}

const imageAllButton = document.getElementById("imageAll");
const imageCheckboxes = document.querySelectorAll("#imageCheckboxes input:not(#imageAll)");

const textAllButton = document.getElementById("textAll");
const textCheckboxes = document.querySelectorAll("#textCheckboxes input:not(#textAll)");

const elementAllButton = document.getElementById("elementAll");
const elementCheckboxes = document.querySelectorAll("#elementCheckboxes input:not(#elementAll)");

let imageCheckState;
let textCheckState;
let elementCheckState;

imageAllButton.addEventListener("click", function() {
    imageCheckState = !imageCheckState;

    imageCheckboxes.forEach(function(checkbox) {
        checkbox.checked = imageCheckState;
    });
});

textAllButton.addEventListener("click", function() {
    textCheckState = !textCheckState;

    textCheckboxes.forEach(function(checkbox) {
        checkbox.checked = textCheckState;
    });
});

elementAllButton.addEventListener("click", function() {
    elementCheckState = !elementCheckState;

    elementCheckboxes.forEach(function(checkbox) {
        checkbox.checked = elementCheckState;
    });
});

function save() {
    const randomImagesChecked = document.getElementById("randomImagesCheck").checked;
    const randomTextChecked = document.getElementById("randomTextCheck").checked;
    const singleWordsChecked = document.getElementById("singleWordsCheck").checked;
    const randomElementsChecked = document.getElementById("randomElementsCheck").checked;
    const borderChecked = document.getElementById("borderCheck").checked;
    const outlineChecked = document.getElementById("outlineCheck").checked;
    const fontFamilyChecked = document.getElementById("fontFamilyCheck").checked;
    const fontWeightChecked = document.getElementById("fontWeightCheck").checked;
    const fontStyleChecked = document.getElementById("fontStyleCheck").checked;
    const textAlignChecked = document.getElementById("textAlignCheck").checked;
    const textDecorChecked = document.getElementById("textDecorCheck").checked;
    const rotationChecked = document.getElementById("rotationCheck").checked;
    const fontSizeChecked = document.getElementById("fontSizeCheck").checked;
    const colorChecked = document.getElementById("colorCheck").checked;
    const textTransformChecked = document.getElementById("textTransformCheck").checked;
    const cursorChecked = document.getElementById("cursorCheck").checked;
    const elementBgColorChecked = document.getElementById("elementBackgroundCheck").checked;
    const borderRadiusChecked = document.getElementById("borderRadiusCheck").checked;
    const paddingChecked = document.getElementById("paddingCheck").checked;
    const opacityChecked = document.getElementById("opacityCheck").checked;
    const positionChecked = document.getElementById("positionCheck").checked;
    const letterSpacingChecked = document.getElementById("letterSpacingCheck").checked;
    const boxShadowChecked = document.getElementById("boxShadowCheck").checked;
    const mainColorText = document.getElementById("mainColorText");
    const saveButton = document.getElementById("saveButton");
    const imageDelayTextField = document.getElementById("imagesDelayText");
    const textDelayTextField = document.getElementById("textDelayText");
    const randomIDChecked = document.getElementById("randomIDCheck").checked;
    const randomClassChecked = document.getElementById("randomClassCheck").checked;
    const randomTitleChecked = document.getElementById("randomTitleCheck").checked;
    const elementAutoChecked = document.getElementById("elementAutoCheck").checked;
    const elementsDelayTextField = document.getElementById("elementsDelayText");
    const floatChecked = document.getElementById("floatCheck").checked;
    const widthChecked = document.getElementById("widthCheck").checked;
    const heightChecked = document.getElementById("heightCheck").checked;
    const visibilityChecked = document.getElementById("visibilityCheck").checked;
    const displayChecked = document.getElementById("displayCheck").checked;
    const overflowChecked = document.getElementById("overflowCheck").checked;
    const lineHeightChecked = document.getElementById("lineHeightCheck").checked;
    const textShadowChecked = document.getElementById("textShadowCheck").checked;
    const zIndexChecked = document.getElementById("zIndexCheck").checked;
    const directionChecked = document.getElementById("directionCheck").checked;
    const textIndentChecked = document.getElementById("textIndentCheck").checked;
    const elementsEveryChecked = document.getElementById("elementsEveryCheck").checked;
    const textEveryChecked = document.getElementById("textEveryCheck").checked;
    const imagesEveryChecked = document.getElementById("imagesEveryCheck").checked;
    const translateChecked = document.getElementById("translateCheck").checked;
    const changeTitleChecked = document.getElementById("changeTitleCheck").checked;
    const textAutoChecked = document.getElementById("textAutoCheck").checked;
    const imagesAutoChecked = document.getElementById("imagesAutoCheck").checked;
    const randomContentEditChecked = document.getElementById("randomContentEditCheck").checked;
    const textFieldChecked = document.getElementById("textFieldCheck").checked;
    const textFieldPlaceChecked = document.getElementById("textFieldPlaceCheck").checked;
    const textChecked = document.getElementById("textCheck").checked;
    const randomDraggableChecked = document.getElementById("randomDraggableCheck").checked;
    const imageChecked = document.getElementById("imageCheck").checked;
    const imageWidthChecked = document.getElementById("imageWidthCheck").checked;
    const imageHeightChecked = document.getElementById("imageHeightCheck").checked;
    const resizeChecked = document.getElementById("resizeCheck").checked;
    const writingModeChecked = document.getElementById("writingModeCheck").checked;
    const randomDisabledChecked = document.getElementById("randomDisabledCheck").checked;
    const randomSelectedChecked = document.getElementById("randomSelectedCheck").checked;
    const backgroundImageChecked = document.getElementById("backgroundImageCheck").checked;
    const randomIconChecked = document.getElementById("randomIconCheck").checked;
    const randomTypeChecked = document.getElementById("randomTypeCheck").checked;
    const randomStartChecked = document.getElementById("randomStartCheck").checked;
    const randomMaxLengthChecked = document.getElementById("randomMaxLengthCheck").checked;
    const randomTabIndexChecked = document.getElementById("randomTabIndexCheck").checked;
    const randomReversedChecked = document.getElementById("randomReversedCheck").checked;
    const whiteSpaceChecked = document.getElementById("whiteSpaceCheck").checked;
    const wordBreakChecked = document.getElementById("wordBreakCheck").checked;
    const wordSpacingChecked = document.getElementById("wordSpacingCheck").checked;

    chrome.storage.sync.set({
        "randomImagesCheck": randomImagesChecked, "randomTextCheck": randomTextChecked, "singleWordsCheck": singleWordsChecked, "randomElementsCheck": randomElementsChecked, "borderCheck": borderChecked,
        "outlineCheck": outlineChecked, "fontFamilyCheck": fontFamilyChecked, "fontWeightCheck": fontWeightChecked, "fontStyleCheck": fontStyleChecked, "textAlignCheck": textAlignChecked,
        "textDecorCheck": textDecorChecked, "rotationCheck": rotationChecked, "fontSizeCheck": fontSizeChecked, "colorCheck": colorChecked, "textTransformCheck": textTransformChecked, "cursorCheck": cursorChecked,
        "elementBackgroundCheck": elementBgColorChecked, "borderRadiusCheck": borderRadiusChecked, "paddingCheck": paddingChecked, "opacityCheck": opacityChecked, "positionCheck": positionChecked,
        "letterSpacingCheck": letterSpacingChecked, "boxShadowCheck": boxShadowChecked, "mainColorText": mainColorText.value, "imagesDelay": imageDelayTextField.value.split(" ")[0], "textDelay": textDelayTextField.value.split(" ")[0],
        "randomIDCheck": randomIDChecked, "randomClassCheck": randomClassChecked, "randomTitleCheck": randomTitleChecked, "elementAutoCheck": elementAutoChecked, "elementsDelay": elementsDelayTextField.value.split(" ")[0],
        "floatCheck": floatChecked, "widthCheck": widthChecked, "heightCheck": heightChecked, "visibilityCheck": visibilityChecked, "displayCheck": displayChecked, "overflowCheck": overflowChecked, "lineHeightCheck": lineHeightChecked,
        "textShadowCheck": textShadowChecked, "zIndexCheck": zIndexChecked, "directionCheck": directionChecked, "textIndentCheck": textIndentChecked,"elementsEveryCheck": elementsEveryChecked, "textEveryCheck": textEveryChecked,
        "imagesEveryCheck": imagesEveryChecked, "translateCheck": translateChecked, "changeTitleCheck": changeTitleChecked, "textAutoCheck": textAutoChecked, "imagesAutoCheck": imagesAutoChecked,
        "randomContentEditCheck": randomContentEditChecked, "textFieldCheck": textFieldChecked, "textFieldPlaceCheck": textFieldPlaceChecked, "textCheck": textChecked, "randomDraggableCheck": randomDraggableChecked,
        "imageCheck": imageChecked, "imageWidthCheck": imageWidthChecked, "imageHeightCheck": imageHeightChecked, "resizeCheck": resizeChecked, "writingModeCheck": writingModeChecked, "randomDisabledCheck": randomDisabledChecked,
        "randomSelectedCheck": randomSelectedChecked, "backgroundImageCheck": backgroundImageChecked, "randomIconCheck": randomIconChecked, "randomTypeCheck": randomTypeChecked, "randomStartCheck": randomStartChecked,
        "randomMaxLengthCheck": randomMaxLengthChecked, "randomTabIndexCheck": randomTabIndexChecked, "randomReversedCheck": randomReversedChecked, "whiteSpaceCheck": whiteSpaceChecked, "wordBreakCheck": wordBreakChecked,
        "wordSpacingCheck": wordSpacingChecked
    }, function() {
        saveButton.textContent = "Saved!"
        chrome.storage.sync.get({mainColorText: "0, 160, 255", imagesDelay: 1, textDelay: 1, elementsDelay: 1}, function(items) {
            document.documentElement.style.setProperty("--mainColor", items.mainColorText);

            if (items.mainColorText == "") {
                document.documentElement.style.setProperty("--mainColor", "0, 160, 255");
                document.getElementById("mainColorText").value = "0, 160, 255";
                save()
            } else {
                document.getElementById("mainColorText").value = items.mainColorText; 
            }

            if (items.imagesDelay == "") {
                document.getElementById("imagesDelayText").value = 1;
                save()
            } else {
                if (items.imagesDelay == 1) {
                    document.getElementById("imagesDelayText").value = `${items.imagesDelay} second`;
                } else if (items.imagesDelay != 1) {
                    document.getElementById("imagesDelayText").value = `${items.imagesDelay} seconds`;
                }
            }

            if (items.textDelay == "") {
                document.getElementById("textDelayText").value = 1;
                save()
            } else {
                if (items.textDelay == 1) {
                    document.getElementById("textDelayText").value = `${items.textDelay} second`;
                } else if (items.textDelay != 1) {
                    document.getElementById("textDelayText").value = `${items.textDelay} seconds`;
                }
            }

            if (items.elementsDelay == "") {
                document.getElementById("elementsDelayText").value = 1;
                save()
            } else {
                if (items.elementsDelay == 1) {
                    document.getElementById("elementsDelayText").value = `${items.elementsDelay} second`;
                } else if (items.elementsDelay != 1) {
                    document.getElementById("elementsDelayText").value = `${items.elementsDelay} seconds`;
                }
            }
        });
        setTimeout(function() {
         saveButton.textContent = "Save"
        }, 2000);
    });
}
function get() {
    chrome.storage.sync.get({
        currentTheme: "dark", randomImagesCheck: false, randomTextCheck: false, singleWordsCheck: false, randomElementsCheck: false, borderCheck: true, outlineCheck: true, fontFamilyCheck: true, fontWeightCheck: true, 
        fontStyleCheck: true, textAlignCheck: true, textDecorCheck: true, rotationCheck: true, fontSizeCheck: true, colorCheck: true, textTransformCheck: true, cursorCheck: true, elementBackgroundCheck: true, 
        borderRadiusCheck: true, paddingCheck: true, opacityCheck: true, positionCheck: true, letterSpacingCheck: true, boxShadowCheck: true, mainColorText: "0, 160, 255", imagesDelay: 1, textDelay: 1, 
        randomIDCheck: true, randomClassCheck: true, randomTitleCheck: true, elementAutoCheck: true, elementsDelay: 1, floatCheck: true, widthCheck: true, heightCheck: true, visibilityCheck: true, displayCheck: true, 
        overflowCheck: true, lineHeightCheck: true, textShadowCheck: true, zIndexCheck: true, directionCheck: true, textIndentCheck: true, elementsEveryCheck: true, textEveryCheck: true, imagesEveryCheck: true, 
        translateCheck: true, changeTitleCheck: true, textAutoCheck: true, imagesAutoCheck: true, randomContentEditCheck: true, textFieldCheck: true, textFieldPlaceCheck: true, textCheck: true, randomDraggableCheck: true, 
        imageCheck: true, imageWidthCheck: true, imageHeightCheck: true, resizeCheck: true, writingModeCheck: true, randomDisabledCheck: true, randomSelectedCheck: true, themeSwitchChecked: true, backgroundImageCheck: true, 
        randomIconCheck: true, randomTypeCheck: true, randomStartCheck: true, randomMaxLengthCheck: true, randomTabIndexCheck: true, randomReversedCheck: true, whiteSpaceCheck: true, wordBreakCheck: true, wordSpacingCheck: true
    }, function(items) {

        if (items.imagesDelay == 1) {
            document.getElementById("imagesDelayText").value = `${items.imagesDelay} second`;
        } else if (items.imagesDelay != 1) {
            document.getElementById("imagesDelayText").value = `${items.imagesDelay} seconds`;
        }

        if (items.textDelay == 1) {
            document.getElementById("textDelayText").value = `${items.textDelay} second`;
        } else if (items.textDelay != 1) {
            document.getElementById("textDelayText").value = `${items.textDelay} seconds`;
        }

        if (items.elementsDelay == 1) {
            document.getElementById("elementsDelayText").value = `${items.elementsDelay} second`;
        } else if (items.elementsDelay != 1) {
            document.getElementById("elementsDelayText").value = `${items.elementsDelay} seconds`;
        }

        html.setAttribute("data-theme", items.currentTheme);
        document.getElementById("randomImagesCheck").checked = items.randomImagesCheck;
        document.getElementById("randomTextCheck").checked = items.randomTextCheck;
        document.getElementById("singleWordsCheck").checked = items.singleWordsCheck;
        document.getElementById("randomElementsCheck").checked = items.randomElementsCheck;
        document.getElementById("borderCheck").checked = items.borderCheck;
        document.getElementById("outlineCheck").checked = items.outlineCheck;
        document.getElementById("fontFamilyCheck").checked = items.fontFamilyCheck;
        document.getElementById("fontWeightCheck").checked = items.fontWeightCheck;
        document.getElementById("fontStyleCheck").checked = items.fontStyleCheck;
        document.getElementById("textAlignCheck").checked = items.textAlignCheck;
        document.getElementById("textDecorCheck").checked = items.textDecorCheck;
        document.getElementById("rotationCheck").checked = items.rotationCheck;
        document.getElementById("fontSizeCheck").checked = items.fontSizeCheck;
        document.getElementById("colorCheck").checked = items.colorCheck;
        document.getElementById("textTransformCheck").checked = items.textTransformCheck;
        document.getElementById("cursorCheck").checked = items.cursorCheck;
        document.getElementById("elementBackgroundCheck").checked = items.elementBackgroundCheck;
        document.getElementById("borderRadiusCheck").checked = items.borderRadiusCheck;
        document.getElementById("paddingCheck").checked = items.paddingCheck;
        document.getElementById("opacityCheck").checked = items.opacityCheck;
        document.getElementById("positionCheck").checked = items.positionCheck;
        document.getElementById("letterSpacingCheck").checked = items.letterSpacingCheck;
        document.getElementById("boxShadowCheck").checked = items.boxShadowCheck;
        document.documentElement.style.setProperty("--mainColor", items.mainColorText);
        document.getElementById("mainColorText").value = items.mainColorText;
        document.getElementById("randomIDCheck").checked = items.randomIDCheck;
        document.getElementById("randomClassCheck").checked = items.randomClassCheck;
        document.getElementById("randomTitleCheck").checked = items.randomTitleCheck;
        document.getElementById("elementAutoCheck").checked = items.elementAutoCheck;
        document.getElementById("floatCheck").checked = items.floatCheck;
        document.getElementById("widthCheck").checked = items.widthCheck;
        document.getElementById("heightCheck").checked = items.heightCheck;
        document.getElementById("visibilityCheck").checked = items.visibilityCheck;
        document.getElementById("displayCheck").checked = items.displayCheck;
        document.getElementById("overflowCheck").checked = items.overflowCheck;
        document.getElementById("lineHeightCheck").checked = items.lineHeightCheck;
        document.getElementById("textShadowCheck").checked = items.textShadowCheck;
        document.getElementById("zIndexCheck").checked = items.zIndexCheck;
        document.getElementById("directionCheck").checked = items.directionCheck;
        document.getElementById("textIndentCheck").checked = items.textIndentCheck;
        document.getElementById("elementsEveryCheck").checked = items.elementsEveryCheck;
        document.getElementById("textEveryCheck").checked = items.textEveryCheck;
        document.getElementById("imagesEveryCheck").checked = items.imagesEveryCheck;
        document.getElementById("translateCheck").checked = items.translateCheck;
        document.getElementById("changeTitleCheck").checked = items.changeTitleCheck;
        document.getElementById("textAutoCheck").checked = items.textAutoCheck;
        document.getElementById("imagesAutoCheck").checked = items.imagesAutoCheck;
        document.getElementById("randomContentEditCheck").checked = items.randomContentEditCheck;
        document.getElementById("textFieldCheck").checked = items.textFieldCheck;
        document.getElementById("textFieldPlaceCheck").checked = items.textFieldPlaceCheck;
        document.getElementById("textCheck").checked = items.textCheck;
        document.getElementById("randomDraggableCheck").checked = items.randomDraggableCheck;
        document.getElementById("imageCheck").checked = items.imageCheck;
        document.getElementById("imageWidthCheck").checked = items.imageWidthCheck;
        document.getElementById("imageHeightCheck").checked = items.imageHeightCheck;
        document.getElementById("resizeCheck").checked = items.resizeCheck;
        document.getElementById("writingModeCheck").checked = items.writingModeCheck;
        document.getElementById("randomDisabledCheck").checked = items.randomDisabledCheck;
        document.getElementById("randomSelectedCheck").checked = items.randomSelectedCheck;
        themeSwitch.checked = items.themeSwitchChecked;
        document.getElementById("backgroundImageCheck").checked = items.backgroundImageCheck;
        document.getElementById("randomIconCheck").checked = items.randomIconCheck;
        document.getElementById("randomTypeCheck").checked = items.randomTypeCheck;
        document.getElementById("randomStartCheck").checked = items.randomStartCheck;
        document.getElementById("randomMaxLengthCheck").checked = items.randomMaxLengthCheck;
        document.getElementById("randomTabIndexCheck").checked = items.randomTabIndexCheck;
        document.getElementById("randomReversedCheck").checked = items.randomReversedCheck;
        document.getElementById("whiteSpaceCheck").checked = items.whiteSpaceCheck;
        document.getElementById("wordBreakCheck").checked = items.wordBreakCheck;
        document.getElementById("wordSpacingCheck").checked = items.wordSpacingCheck;
    });
}
