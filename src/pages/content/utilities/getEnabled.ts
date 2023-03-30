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

    [...await allCheckedStates].forEach(({ id, checked }) => {
        map.set(id, checked);
    });

    return map;
}

export default async function getEnabled(id: string) {
    const checkedStatesMap = await getMap();

    if (!checkedStatesMap.has(id)) {
        console.log(`Checked state of [${id}] does not exist!`);
        return false;
    }

    return checkedStatesMap.get(id);
}