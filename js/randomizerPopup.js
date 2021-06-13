const manifest = chrome.runtime.getManifest();
const version = document.getElementById("popupVersion");
const html = document.querySelector("html");

version.textContent = `v${manifest.version}`;

document.addEventListener("DOMContentLoaded", get);

document.getElementById("optionsButton").addEventListener("click", function() {
    if (chrome.runtime.openOptionsPage) {
     chrome.runtime.openOptionsPage();
    } else {
     window.open(chrome.runtime.getURL("randomizerOptions.html"));
    }
});

function convertHexToRGB(hex) {
    const hex_code = hex.split("");
    const red = parseInt(hex_code[1]+hex_code[2],16);
    const green = parseInt(hex_code[3]+hex_code[4],16);
    const blue = parseInt(hex_code[5]+hex_code[6],16);
    const rgb = `${red}, ${green}, ${blue}`;

    return rgb;
}

function get() {
    chrome.storage.sync.get({currentTheme: "dark", primaryColor: "#00a0FF"}, function(items) {
        html.setAttribute("data-theme", items.currentTheme);
        document.documentElement.style.setProperty("--primaryColor", convertHexToRGB(items.primaryColor));
    });
}
