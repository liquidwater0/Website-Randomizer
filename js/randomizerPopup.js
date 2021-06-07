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
    chrome.storage.sync.get({currentTheme: "dark", primaryColorText: "0, 160, 255"}, function(items) {
        html.setAttribute("data-theme", items.currentTheme);

        document.documentElement.style.setProperty("--primaryColor", items.primaryColorText);

        if (items.primaryColorText == "") {
            document.documentElement.style.setProperty("--primaryColor", "0, 160, 255");
        }
    });
}
