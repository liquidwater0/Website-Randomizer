import { 
	imageCheckboxes, 
	textCheckboxes, 
	elementCheckboxes, 
	optionsCheckboxes, 
	CheckboxOption 
} from "../../checkboxes";

chrome.runtime.onInstalled.addListener(details => {
    if (details.reason !== "install") return;

	chrome.storage.sync.set({
		imageCheckedStates: imageCheckboxes, 
		textCheckedStates: textCheckboxes,
		elementCheckedStates: elementCheckboxes,
		optionsCheckedStates: optionsCheckboxes
	});

    if (chrome.runtime.openOptionsPage) {
		chrome.runtime.openOptionsPage();
	} else {
		window.open(chrome.runtime.getURL("options.html"));
	}
});

handleUpdatedCheckboxes();

function handleUpdatedCheckboxes() {
	setUpdatedArray(imageCheckboxes, "imageCheckedStates");
	setUpdatedArray(textCheckboxes, "textCheckedStates");
	setUpdatedArray(elementCheckboxes, "elementCheckedStates");
	setUpdatedArray(optionsCheckboxes, "optionsCheckedStates");
}

function setUpdatedArray(randomizerCheckboxes: CheckboxOption[], checkedStatesStorageKey: string) {
	chrome.storage.sync.get({ [checkedStatesStorageKey]: [] }, items => {
		let finalArray: CheckboxOption[] = items[checkedStatesStorageKey];

		randomizerCheckboxes.forEach(checkbox => {
			const newCheckbox: CheckboxOption | undefined = items[checkedStatesStorageKey].find((item: CheckboxOption) => {
				return item.id === checkbox.id;
			});
	
			if (newCheckbox === undefined) finalArray.push(checkbox);
		});
	
		items[checkedStatesStorageKey].forEach((checkbox: CheckboxOption) => {
			const removedCheckbox: CheckboxOption | undefined = randomizerCheckboxes.find((item: CheckboxOption) => {
				return item.id === checkbox.id;
			});
	
			if (removedCheckbox === undefined) {
				finalArray = finalArray.filter(item => item.id !== checkbox.id);
			}
		});
	
		chrome.storage.sync.set({ [checkedStatesStorageKey]: finalArray });
	});
}