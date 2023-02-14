import { imageCheckboxes, textCheckboxes, elementCheckboxes, optionsCheckboxes } from "../../checkboxes";

function saveOptions() {
	chrome.storage.sync.set({
		imageCheckedStates: imageCheckboxes, 
		textCheckedStates: textCheckboxes,
		elementCheckedStates: elementCheckboxes,
		optionsCheckedStates: optionsCheckboxes
	});
}

chrome.runtime.onInstalled.addListener(details => {
    if (details.reason !== "install") return;

	saveOptions();

    if (chrome.runtime.openOptionsPage) {
		chrome.runtime.openOptionsPage();
	} else {
		window.open(chrome.runtime.getURL("options.html"));
	}
});