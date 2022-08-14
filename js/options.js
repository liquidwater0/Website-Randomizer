document.addEventListener("DOMContentLoaded", get);

const manifest = chrome.runtime.getManifest();
const versionElement = document.getElementById("version");

versionElement.textContent = `Website Randomizer v${manifest.version}`;

const saveButton = document.getElementById("saveButton");
const themeChangerButton = document.getElementById("themeChanger");
const themeChangerIcon = themeChangerButton.querySelector("i.material-icons");

saveButton.addEventListener("click", save);
themeChangerButton.addEventListener("click", changeTheme);

let isDarkTheme;

function updateTheme() {
    chrome.storage.sync.get({
        currentTheme: "dark"
    }, items => {
        isDarkTheme = (items.currentTheme === "dark") ? true : false;
        themeChangerIcon.textContent = (items.currentTheme === "dark") ? "brightness_7" : "brightness_4";
        document.documentElement.setAttribute("data-theme", items.currentTheme);
    });
}

function changeTheme() {
    isDarkTheme = !isDarkTheme;
    chrome.storage.sync.set({ "currentTheme": isDarkTheme ? "dark" : "light" });
    updateTheme();
} 

const checkboxes = document.querySelectorAll("[data-checkbox]");
const selectAllButtons = document.querySelectorAll("[data-select-all]");

let allChecked;

selectAllButtons.forEach(button => {
    button.addEventListener("click", event => {
        const checkboxContainer = event.target.parentElement;
        const checkboxes = [...checkboxContainer.querySelectorAll("input[type='checkbox']")];
        const filteredCheckboxes = checkboxes.filter(checkbox => !checkbox.hasAttribute("data-default-enabled"));

        allChecked = !allChecked;
        filteredCheckboxes.forEach(checkbox => checkbox.checked = allChecked);
    });
});

function save() {
    const checkStates = new Map();

    checkboxes.forEach(checkbox => {
        const attribute = checkbox.getAttribute("data-checkbox");
        checkStates.set(attribute, checkbox.checked);
    });

    chrome.storage.sync.set({
        "checkStates": Object.fromEntries(checkStates)
    }, () => {
        saveButton.textContent = "Saved!";
        setTimeout(() => saveButton.textContent = "Save", 3000);
    });
}

function get() {
    chrome.storage.sync.get({
        checkStates: {}
    }, items => {
        updateTheme();

        const checkStatesMap = new Map(Object.entries(items.checkStates));
        
        checkboxes.forEach(checkbox => {
            const attribute = checkbox.getAttribute("data-checkbox");
            const isDefaultEnabled = checkbox.getAttribute("data-default-enabled");

            if (checkStatesMap.has(attribute)) {
                checkbox.checked = checkStatesMap.get(attribute);
            } else if (isDefaultEnabled === "false") {
                checkbox.checked = false;
            } else {
                checkbox.checked = true;
            }
        });
    });
}