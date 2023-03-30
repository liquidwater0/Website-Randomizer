export type CheckboxOption = {
    label: string,
    id: string,
    subSection: string | null,
    checked: boolean
}

export const imageCheckboxes: CheckboxOption[] = [
    {
        label: "Enabled",
        id: "imageEnabled",
        subSection: null,
        checked: false
    }, {
        label: "Random Images",
        id: "randomImages",
        subSection: null,
        checked: true
    }, {
        label: "Random Image Height",
        id: "randomImageHeight",
        subSection: null,
        checked: true
    }, {
        label: "Random Image Width",
        id: "randomImageWidth",
        subSection: null,
        checked: true
    }
];

export const textCheckboxes: CheckboxOption[] = [
    {
        label: "Enabled",
        id: "textEnabled",
        subSection: null,
        checked: false
    }, {
        label: "Random Page Title",
        id: "randomPageTitle",
        subSection: null,
        checked: true
    }, {
        label: "Random Text",
        id: "randomText",
        subSection: null,
        checked: true
    }, {
        label: "Random Text Field Placeholders",
        id: "randomTextFieldPlaceholders",
        subSection: null,
        checked: true
    }, {
        label: "Random Text Field Values",
        id: "randomTextFieldValues",
        subSection: null,
        checked: true
    }, {
        label: "Shuffle Text",
        id: "shuffleText",
        subSection: null,
        checked: false
    }, {
        label: "Random Font",
        id: "randomFont",
        subSection: "styles",
        checked: true
    }, {
        label: "Random Font Size",
        id: "randomFontSize",
        subSection: "styles",
        checked: true
    }, {
        label: "Random Font Style",
        id: "randomFontStyle",
        subSection: "styles",
        checked: true
    }, {
        label: "Random Font Weight",
        id: "randomFontWeight",
        subSection: "styles",
        checked: true
    }, {
        label: "Random Letter Spacing",
        id: "randomLetterSpacing",
        subSection: "styles",
        checked: true
    }, {
        label: "Random Line Height",
        id: "randomLineHeight",
        subSection: "styles",
        checked: true
    }, {
        label: "Random Text Align",
        id: "randomTextAlign",
        subSection: "styles",
        checked: true
    }, {
        label: "Random Text Color",
        id: "randomTextColor",
        subSection: "styles",
        checked: true
    }, {
        label: "Random Text Decoration",
        id: "randomTextDecoration",
        subSection: "styles",
        checked: true
    }, {
        label: "Random Text Indent",
        id: "randomTextIndent",
        subSection: "styles",
        checked: true
    }, {
        label: "Random Text Selection",
        id: "randomTextSelection",
        subSection: "styles",
        checked: true
    }, {
        label: "Random Text Shadow",
        id: "randomTextShadow",
        subSection: "styles",
        checked: true
    }, {
        label: "Random Text Transform",
        id: "randomTextTransform",
        subSection: "styles",
        checked: true
    }, {
        label: "Random Vertical Align",
        id: "randomVerticalAlign",
        subSection: "styles",
        checked: true
    }, {
        label: "Random Word Break Type",
        id: "randomWordBreakType",
        subSection: "styles",
        checked: true
    }, {
        label: "Random Word Spacing",
        id: "randomWordSpacing",
        subSection: "styles",
        checked: true
    }
];

export const elementCheckboxes: CheckboxOption[] = [
    {
        label: "Enabled",
        id: "elementEnabled",
        subSection: null,
        checked: false
    }, {
        label: "Random Checked States",
        id: "randomCheckedStates",
        subSection: null,
        checked: true
    }, {
        label: "Random Icons",
        id: "randomIcons",
        subSection: null,
        checked: true
    }, {
        label: "Random Input Values",
        id: "randomInputValues",
        subSection: null,
        checked: true
    }, {
        label: "Random Class List",
        id: "randomClassList",
        subSection: "attributes",
        checked: true
    }, {
        label: "Random Content Editable",
        id: "randomContentEditable",
        subSection: "attributes",
        checked: true
    }, {
        label: "Random Disabled",
        id: "randomDisabled",
        subSection: "attributes",
        checked: true
    }, {
        label: "Random Draggable",
        id: "randomDraggable",
        subSection: "attributes",
        checked: true
    }, {
        label: "Random ID",
        id: "randomID",
        subSection: "attributes",
        checked: true
    }, {
        label: "Random List Reversed",
        id: "randomListReversed",
        subSection: "attributes",
        checked: true
    }, {
        label: "Random List Start",
        id: "randomListStart",
        subSection: "attributes",
        checked: true
    }, {
        label: "Random Max Length",
        id: "randomMaxLength",
        subSection: "attributes",
        checked: true
    }, {
        label: "Random Option Selected",
        id: "randomOptionSelected",
        subSection: "attributes",
        checked: true
    }, {
        label: "Random Tab Index",
        id: "randomTabIndex",
        subSection: "attributes",
        checked: true
    }, {
        label: "Random Tooltip",
        id: "randomTooltip",
        subSection: "attributes",
        checked: true
    }, {
        label: "Random Type",
        id: "randomType",
        subSection: "attributes",
        checked: true
    }, {
        label: "Random Background Color",
        id: "randomBackgroundColor",
        subSection: "styles",
        checked: true
    }, {
        label: "Random Background Image",
        id: "randomBackgroundImage",
        subSection: "styles",
        checked: true
    }, {
        label: "Random Border",
        id: "randomBorder",
        subSection: "styles",
        checked: true
    }, {
        label: "Random Box Shadow",
        id: "randomBoxShadow",
        subSection: "styles",
        checked: true
    }, {
        label: "Random Corner Radius",
        id: "randomCornerRadius",
        subSection: "styles",
        checked: true
    }, {
        label: "Random Cursor",
        id: "randomCursor",
        subSection: "styles",
        checked: true
    }, {
        label: "Random Display Type",
        id: "randomDisplayType",
        subSection: "styles",
        checked: true
    }, {
        label: "Random Float",
        id: "randomFloat",
        subSection: "styles",
        checked: true
    }, {
        label: "Random Height",
        id: "randomHeight",
        subSection: "styles",
        checked: true
    }, {
        label: "Random Move",
        id: "randomMove",
        subSection: "styles",
        checked: true
    }, {
        label: "Random Opacity",
        id: "randomOpacity",
        subSection: "styles",
        checked: true
    }, {
        label: "Random Outline",
        id: "randomOutline",
        subSection: "styles",
        checked: true
    }, {
        label: "Random Overflow",
        id: "randomOverflow",
        subSection: "styles",
        checked: true
    }, {
        label: "Random Padding",
        id: "randomPadding",
        subSection: "styles",
        checked: true
    }, {
        label: "Random Positioning Type",
        id: "randomPositioningType",
        subSection: "styles",
        checked: true
    }, {
        label: "Random Resize Ability",
        id: "randomResizeAbility",
        subSection: "styles",
        checked: true
    }, {
        label: "Random Rotation",
        id: "randomRotation",
        subSection: "styles",
        checked: true
    }, {
        label: "Random Stack Order",
        id: "randomStackOrder",
        subSection: "styles",
        checked: true
    }, {
        label: "Random Visibility",
        id: "randomVisibility",
        subSection: "styles",
        checked: true
    }, {
        label: "Random Width",
        id: "randomWidth",
        subSection: "styles",
        checked: true
    }
];

export const optionsCheckboxes: CheckboxOption[] = [
    {
        label: "Single Words",
        id: "singleWords",
        subSection: "textRandomizer",
        checked: false
    }
];