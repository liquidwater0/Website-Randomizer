export type Nodes = { 
    images: HTMLImageElement[],
    text: Node[],
    elements: HTMLElement[]
}

type Image = { src: string, srcset: string, alt: string };
type Text = string;
type Class = string;
type ID = string;

export let staticImages: Image[] = [];
export let staticText: Text[] = [];
export let staticClassLists: Class[] = [];
export let staticIDs: ID[] = [];

export let nodes: Nodes = {
    images: [],
    text: [],
    elements: [],
};

export function updateStaticImages(newArray: Image[]) {
    staticImages = newArray;
}

export function updateStaticText(newArray: Text[]) {
    staticText = newArray;
}

export function updateStaticClassLists(newArray: Class[]) {
    staticClassLists = newArray;
}

export function updateStaticIDs(newArray: ID[]) {
    staticIDs = newArray;
}

export default function getNodes(newNodes: NodeListOf<HTMLElement> | Node[]) {
    const imageNodes: HTMLImageElement[] = [];
    const textNodes: Node[] = [];
    const elementNodes: HTMLElement[] = [];

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
                    ) return NodeFilter.FILTER_SKIP;

                    return NodeFilter.FILTER_ACCEPT;
                }
            }
        );

        const elementWalker = document.createTreeWalker(
            node,
            NodeFilter.SHOW_ELEMENT,
            {
                acceptNode: () => {
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
            const rejectedElements = ["script", "style", "noscript", "title"];

            if (rejectedElements.some(item => item.toUpperCase() === (currentElement as HTMLElement).tagName)) return;

            if ((currentElement as HTMLImageElement).tagName === "IMG") {
                staticImages.push({
                    src: (currentElement as HTMLImageElement).src,
                    srcset: (currentElement as HTMLImageElement).srcset,
                    alt: (currentElement as HTMLImageElement).alt
                });

                imageNodes.push((currentElement as HTMLImageElement));
            }

            if (
                (currentElement as HTMLElement).classList && 
                (currentElement as HTMLElement).classList.toString().trim() !== ""
            ) staticClassLists.push((currentElement as HTMLElement).classList.toString());

            if (
                (currentElement as HTMLElement).id && 
                (currentElement as HTMLElement).id.trim() !== ""
            ) staticIDs.push((currentElement as HTMLElement).id);

            elementNodes.push((currentElement as HTMLElement));
            currentElement = elementWalker.nextNode();
        }
    });

    nodes = {
        images: imageNodes,
        text: textNodes,
        elements: elementNodes
    }
}