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
                    options.sort((a, b) => a.label > b.label ? 1 : -1).map(({ label, checked, subSection }, index) => {
                        if (subSection !== "textRandomizer") return;
                        return (
                            <Checkbox
                                key={label}
                                index={index}
                                setOptions={setOptions}
                                label={label}
                                ariaLabel={label}
                                checked={checked}
                            />
                        );
                    })
                }
            </SubSection>
        </>
    );
}