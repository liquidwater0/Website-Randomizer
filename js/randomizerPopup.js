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

function get() {
    chrome.storage.sync.get({currentTheme: "dark", mainColorText: "0, 160, 255"}, function(items) {
        html.setAttribute("data-theme", items.currentTheme);

        document.documentElement.style.setProperty("--mainColor", items.mainColorText);

        if (items.mainColorText == "") {
            document.documentElement.style.setProperty("--mainColor", "0, 160, 255");
        }
    });
}