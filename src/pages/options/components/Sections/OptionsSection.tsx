import React, { useState, useEffect } from 'react';
import { useUpdateEffect } from '../../hooks/useUpdateEffect';
import SubSection from './SubSection';
import Checkbox from "../Checkbox";
import { optionsCheckboxes } from '../../../../checkboxes';

export default function OptionsSection({ saveToggle }: { saveToggle: boolean }) {
    const [options, setOptions] = useState(optionsCheckboxes);

    useEffect(() => {
        chrome.storage.sync.get({ optionsCheckedStates: optionsCheckboxes }, items => {
            setOptions(items.optionsCheckedStates);
        });
    }, []);

    useUpdateEffect(() => {
        chrome.storage.sync.set({ optionsCheckedStates: options });
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