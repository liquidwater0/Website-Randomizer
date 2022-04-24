document.addEventListener("DOMContentLoaded", get);

const manifest = chrome.runtime.getManifest();

const optionsButton = document.getElementById("optionsButton");
optionsButton.addEventListener("click", openOptions);

const versionElement = document.getElementById("version");
versionElement.textContent = `v${manifest.version}`;

function openOptions() {
    if (chrome.runtime.openOptionsPage) {
		chrome.runtime.openOptionsPage();
	} else {
		window.open(chrome.runtime.getURL("options.html"));
	}
}

function get() {
    chrome.storage.sync.get({
        currentTheme: "dark"
    }, items => {
        document.documentElement.setAttribute("data-theme", items.currentTheme);
    });
}
