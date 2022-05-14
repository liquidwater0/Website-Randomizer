let nodes;

//find a better way to do this
setTimeout(() => {
    const everything = document.querySelectorAll("body *");
    nodes = getNodes(everything);
    activateAll(nodes);
}, 10);

function activateAll(nodes) {
    removeArrayDuplicates();
    imageRandomizer(nodes);
    textRandomizer(nodes);
    elementRandomizer(nodes);
}

const observer = new MutationObserver(entries => {
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