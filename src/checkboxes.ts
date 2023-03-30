export type CheckboxOption = {
    name: string,
    id: string,
    subSection: string | null,
    checked: boolean
}

export const imageCheckboxes: CheckboxOption[] = [
    {
        name: "Enabled",
        id: "imageEnabled",
        subSection: null,
        checked: false
    }, {
        name: "Random Images",
        id: "randomImages",
        subSection: null,
        checked: true
    }, {
        name: "Random Image Height",
        id: "randomImageHeight",
        subSection: null,
        checked: true
    }, {
        name: "Random Image Width",
        id: "randomImageWidth",
        subSection: null,
        checked: true
    }
];

export const textCheckboxes: CheckboxOption[] = [
    {
        name: "Enabled",
        id: "textEnabled",
        subSection: null,
        checked: false
    }, {
        name: "Random Page Title",
        id: "randomPageTitle",
        subSection: null,
        checked: true
    }, {
        name: "Random Text",
        id: "randomText",
        subSection: null,
        checked: true
    }, {
        name: "Random Text Field Placeholders",
        id: "randomTextFieldPlaceholders",
        subSection: null,
        checked: true
    }, {
        name: "Random Text Field Values",
        id: "randomTextFieldValues",
        subSection: null,
        checked: true
    }, {
        name: "Shuffle Text",
        id: "shuffleText",
        subSection: null,
        checked: false
    }, {
        name: "Random Font",
        id: "randomFont",
        subSection: "styles",
        checked: true
    }, {
        name: "Random Font Size",
        id: "randomFontSize",
        subSection: "styles",
        checked: true
    }, {
        name: "Random Font Style",
        id: "randomFontStyle",
        subSection: "styles",
        checked: true
    }, {
        name: "Random Font Weight",
        id: "randomFontWeight",
        subSection: "styles",
        checked: true
    }, {
        name: "Random Letter Spacing",
        id: "randomLetterSpacing",
        subSection: "styles",
        checked: true
    }, {
        name: "Random Line Height",
        id: "randomLineHeight",
        subSection: "styles",
        checked: true
    }, {
        name: "Random Text Align",
        id: "randomTextAlign",
        subSection: "styles",
        checked: true
    }, {
        name: "Random Text Color",
        id: "randomTextColor",
        subSection: "styles",
        checked: true
    }, {
        name: "Random Text Decoration",
        id: "randomTextDecoration",
        subSection: "styles",
        checked: true
    }, {
        name: "Random Text Indent",
        id: "randomTextIndent",
        subSection: "styles",
        checked: true
    }, {
        name: "Random Text Selection",
        id: "randomTextSelection",
        subSection: "styles",
        checked: true
    }, {
        name: "Random Text Shadow",
        id: "randomTextShadow",
        subSection: "styles",
        checked: true
    }, {
        name: "Random Text Transform",
        id: "randomTextTransform",
        subSection: "styles",
        checked: true
    }, {
        name: "Random Vertical Align",
        id: "randomVerticalAlign",
        subSection: "styles",
        checked: true
    }, {
        name: "Random Word Break Type",
        id: "randomWordBreakType",
        subSection: "styles",
        checked: true
    }, {
        name: "Random Word Spacing",
        id: "randomWordSpacing",
        subSection: "styles",
        checked: true
    }
];

export const elementCheckboxes: CheckboxOption[] = [
    {
        name: "Enabled",
        id: "elementEnabled",
        subSection: null,
        checked: false
    }, {
        name: "Random Checked States",
        id: "randomCheckedStates",
        subSection: null,
        checked: true
    }, {
        name: "Random Icons",
        id: "randomIcons",
        subSection: null,
        checked: true
    }, {
        name: "Random Input Values",
        id: "randomInputValues",
        subSection: null,
        checked: true
    }, {
        name: "Random Class List",
        id: "randomClassList",
        subSection: "attributes",
        checked: true
    }, {
        name: "Random Content Editable",
        id: "randomContentEditable",
        subSection: "attributes",
        checked: true
    }, {
        name: "Random Disabled",
        id: "randomDisabled",
        subSection: "attributes",
        checked: true
    }, {
        name: "Random Draggable",
        id: "randomDraggable",
        subSection: "attributes",
        checked: true
    }, {
        name: "Random ID",
        id: "randomID",
        subSection: "attributes",
        checked: true
    }, {
        name: "Random List Reversed",
        id: "randomListReversed",
        subSection: "attributes",
        checked: true
    }, {
        name: "Random List Start",
        id: "randomListStart",
        subSection: "attributes",
        checked: true
    }, {
        name: "Random Max Length",
        id: "randomMaxLength",
        subSection: "attributes",
        checked: true
    }, {
        name: "Random Option Selected",
        id: "randomOptionSelected",
        subSection: "attributes",
        checked: true
    }, {
        name: "Random Tab Index",
        id: "randomTabIndex",
        subSection: "attributes",
        checked: true
    }, {
        name: "Random Tooltip",
        id: "randomTooltip",
        subSection: "attributes",
        checked: true
    }, {
        name: "Random Type",
        id: "randomType",
        subSection: "attributes",
        checked: true
    }, {
        name: "Random Background Color",
        id: "randomBackgroundColor",
        subSection: "styles",
        checked: true
    }, {
        name: "Random Background Image",
        id: "randomBackgroundImage",
        subSection: "styles",
        checked: true
    }, {
        name: "Random Border",
        id: "randomBorder",
        subSection: "styles",
        checked: true
    }, {
        name: "Random Box Shadow",
        id: "randomBoxShadow",
        subSection: "styles",
        checked: true
    }, {
        name: "Random Corner Radius",
        id: "randomCornerRadius",
        subSection: "styles",
        checked: true
    }, {
        name: "Random Cursor",
        id: "randomCursor",
        subSection: "styles",
        checked: true
    }, {
        name: "Random Display Type",
        id: "randomDisplayType",
        subSection: "styles",
        checked: true
    }, {
        name: "Random Float",
        id: "randomFloat",
        subSection: "styles",
        checked: true
    }, {
        name: "Random Height",
        id: "randomHeight",
        subSection: "styles",
        checked: true
    }, {
        name: "Random Move",
        id: "randomMove",
        subSection: "styles",
        checked: true
    }, {
        name: "Random Opacity",
        id: "randomOpacity",
        subSection: "styles",
        checked: true
    }, {
        name: "Random Outline",
        id: "randomOutline",
        subSection: "styles",
        checked: true
    }, {
        name: "Random Overflow",
        id: "randomOverflow",
        subSection: "styles",
        checked: true
    }, {
        name: "Random Padding",
        id: "randomPadding",
        subSection: "styles",
        checked: true
    }, {
        name: "Random Positioning Type",
        id: "randomPositioningType",
        subSection: "styles",
        checked: true
    }, {
        name: "Random Resize Ability",
        id: "randomResizeAbility",
        subSection: "styles",
        checked: true
    }, {
        name: "Random Rotation",
        id: "randomRotation",
        subSection: "styles",
        checked: true
    }, {
        name: "Random Stack Order",
        id: "randomStackOrder",
        subSection: "styles",
        checked: true
    }, {
        name: "Random Visibility",
        id: "randomVisibility",
        subSection: "styles",
        checked: true
    }, {
        name: "Random Width",
        id: "randomWidth",
        subSection: "styles",
        checked: true
    }
];

export const optionsCheckboxes: CheckboxOption[] = [
    {
        name: "Single Words",
        id: "singleWords",
        subSection: "textRandomizer",
        checked: false
    }
];