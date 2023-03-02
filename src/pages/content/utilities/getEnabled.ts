import { CheckboxOption } from "../../../checkboxes";

const allCheckedStates: Promise<CheckboxOption[]> = new Promise((resolve, reject) => {
    chrome.storage.sync.get({ 
        imageCheckedStates: [], textCheckedStates: [], elementCheckedStates: [], optionsCheckedStates: [] 
    }, items => {
        resolve([
            ...items.imageCheckedStates, 
            ...items.textCheckedStates,
            ...items.elementCheckedStates,
            ...items.optionsCheckedStates
        ]);
    });
});

async function getMap() {
    const map: Map<string, boolean> = new Map();

    [...await allCheckedStates].forEach(({ storageKey, checked }) => {
        map.set(storageKey, checked);
    });

    return map;
}

export default async function getEnabled(storageKey: string) {
    const checkedStatesMap = await getMap();

    if (!checkedStatesMap.has(storageKey)) {
        console.log(`Checked state of [${storageKey}] does not exist!`);
        return false;
    }

    return checkedStatesMap.get(storageKey);
}