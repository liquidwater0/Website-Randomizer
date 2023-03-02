import "./scss/content.scss";
import getNodes, { nodes } from "./utilities/nodeUtilities";
import { isAllDisabled, isIcon, removeArrayDuplicates } from "./utilities/utilities";
import imageRandomizer from "./randomizers/imageRandomizer";
import textRandomizer from "./randomizers/textRandomizer";
import elementRandomizer from "./randomizers/elementRandomizer";

//find a better way to do this
setTimeout(() => {
    isAllDisabled().then(allDisabled => {
        if (allDisabled) return;

        const everything = document.querySelectorAll<HTMLElement>("body *");

        getNodes(everything);
        activateAll();
    });
}, 25);

function activateAll() {
    removeArrayDuplicates();

    imageRandomizer(nodes);
    textRandomizer(nodes);
    elementRandomizer(nodes);
}

const observer = new MutationObserver(entries => {
    isAllDisabled().then(allDisabled => {
        if (allDisabled) return;

        const mutations = entries;

        mutations.forEach(mutation => {
            const addedNodes = [...mutation.addedNodes].filter(node => !isIcon(node));

            if (addedNodes.length <= 0) return;

            getNodes(addedNodes);
            activateAll();
        });
    });
});

observer.observe(document.body, { 
    childList: true,
    subtree: true
});