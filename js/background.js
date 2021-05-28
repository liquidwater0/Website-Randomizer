chrome.runtime.onInstalled.addListener(function() {
	if (chrome.runtime.openOptionsPage) {
	 chrome.runtime.openOptionsPage();
	} else {
	 window.open(chrome.runtime.getURL("randomizerOptions.html"));
	}
});