import React, { useState, useEffect, useRef } from 'react';
import SubSection from './SubSection';
import Checkbox from "../Checkbox";
import { optionsCheckboxes } from '../../../../checkboxes';

export default function OptionsSection({ saveToggle }) {
    const firstRender = useRef(true);
    const [options, setOptions] = useState(optionsCheckboxes);

    useEffect(() => {
        chrome.storage.sync.get({ optionsCheckedStates: optionsCheckboxes }, items => {
            setOptions(items.optionsCheckedStates);
        });
    }, []);

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }

        const storage = {};

        options.forEach(({ storageKey, checked }) => {
            storage.optionsCheckedStates = options;
            storage[storageKey] = checked;
        });

        chrome.storage.sync.set(storage);
    }, [saveToggle]);

    return (
        <>
            <SubSection text="Text Randomizer">
                {
                    options.map(({ name, checked, subSection }, index) => {
                        if (subSection !== "textRandomizer") return;
                        return (
                            <Checkbox
                                key={name}
                                index={index}
                                setOptions={setOptions}
                                label={name}
                                ariaLabel={name}
                                checked={checked}
                            />
                        );
                    })
                }
            </SubSection>
        </>
    );
}