let nodes;

//find a better way to do this
setTimeout(() => {
    if(isAllDisabled()) return;

    const everything = document.querySelectorAll("body *");
    nodes = getNodes(everything);
    activateAll(nodes);
}, 10);

function activateAll(nodes) {
    if(isAllDisabled()) return;

    removeArrayDuplicates();
    if (getEnabled("imageEnabled")) imageRandomizer(nodes);
    if (getEnabled("textEnabled")) textRandomizer(nodes);
    if (getEnabled("elementEnabled")) elementRandomizer(nodes);
}

const observer = new MutationObserver(entries => {
    if(isAllDisabled()) return;
    
    const mutations = entries;

    mutations.forEach(mutation => {
        const addedNodes = [...mutation.addedNodes];
        const isIcon = addedNodes.some(node => {
            return node.tagName === "I" && node.classList.contains("material-icons");
        });

        if (isIcon) return;

        nodes = getNodes(addedNodes);
        activateAll(nodes);
    });
});

observer.observe(document.body, { 
    childList: true,
    subtree: true
});
