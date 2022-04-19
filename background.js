chrome.runtime.onInstalled.addListener(details => {
    if (details.reason !== "install") return;

    if (chrome.runtime.openOptionsPage) {
		chrome.runtime.openOptionsPage();
	} else {
		window.open(chrome.runtime.getURL("options.html"));
	}
});
