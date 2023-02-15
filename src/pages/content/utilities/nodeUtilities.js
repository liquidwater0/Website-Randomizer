import { isIcon } from "./utilities";

export let staticImages = [];
export let staticText = [];
export let staticClassLists = [];
export let staticIDs = [];

export let nodes = {};

export function updateStaticImages(newArray) {
    staticImages = newArray;
}

export function updateStaticText(newArray) {
    staticText = newArray;
}

export function updateStaticClassLists(newArray) {
    staticClassLists = newArray;
}

export function updateStaticIDs(newArray) {
    staticIDs = newArray;
}

export default function getNodes(newNodes) {
    const imageNodes = [];
    const textNodes = [];
    const elementNodes = [];

    newNodes.forEach(node => {
        const textWalker = document.createTreeWalker(
            node,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode: node => {
                    const rejectedElements = ["script", "style", "noscript", "title"];

                    if (
                        rejectedElements.some(item => item.toUpperCase() === node.parentElement.tagName) || 
                        node.nodeValue.trim() === ""
                    ) {
                        return NodeFilter.FILTER_SKIP;
                    }

                    return NodeFilter.FILTER_ACCEPT;
                }
            }
        );

        const elementWalker = document.createTreeWalker(
            node,
            NodeFilter.SHOW_ELEMENT,
            {
                acceptNode: node => {
                    if (isIcon(node)) return NodeFilter.FILTER_SKIP;
                    return NodeFilter.FILTER_ACCEPT;
                }
            }
        );

        let currentText = textWalker.currentNode;
        let currentElement = elementWalker.currentNode;

        while (currentText) {
            if (currentText.nodeValue) {
                staticText.push(currentText.nodeValue);
                textNodes.push(currentText);
            }

            currentText = textWalker.nextNode();
        }

        while (currentElement) {
            //Why does it work here but not in the filter function?????
            const rejectedElements = ["script", "style", "noscript"];

            if (rejectedElements.some(item => item.toUpperCase() === node.tagName)) return;

            if (currentElement.tagName === "IMG") {
                staticImages.push({
                    src: currentElement.src,
                    srcset: currentElement.srcset,
                    alt: currentElement.alt
                });

                imageNodes.push(currentElement);
            }

            if (currentElement.classList && currentElement.classList.toString().trim() !== "") {
                staticClassLists.push(currentElement.classList.toString());
            }

            if (currentElement.id && currentElement.id.trim() !== "") {
                staticIDs.push(currentElement.id);
            }

            elementNodes.push(currentElement);
            currentElement = elementWalker.nextNode();
        }
    });

    nodes = {
        images: imageNodes,
        text: textNodes,
        elements: elementNodes
    }
}