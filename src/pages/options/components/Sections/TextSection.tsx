import React, { useState, useEffect } from 'react';
import { useUpdateEffect } from '../../hooks/useUpdateEffect';
import { Button } from '@mui/material';
import SubSection from "../Sections/SubSection";
import Checkbox from "../Checkbox";
import { textCheckboxes } from '../../../../checkboxes';

export default function TextSection({ saveToggle }: { saveToggle: boolean }) {
    const [options, setOptions] = useState(textCheckboxes);
    const [toggleAll, setToggleAll] = useState(true);

    useEffect(() => {
        chrome.storage.sync.get({ textCheckedStates: textCheckboxes }, items => {
            setOptions(items.textCheckedStates);
        });
    }, []);

    useUpdateEffect(() => {
        chrome.storage.sync.set({ textCheckedStates: options });
    }, [saveToggle]);

    function toggleAllCheckboxes() {
        setOptions(prev => {
            const copy = [...prev];
            copy.forEach(checkbox => {
                if (checkbox.id === "textEnabled") return;
                checkbox.checked = toggleAll;
            });
            return copy;
        });

        setToggleAll(prev => !prev);
    }

    return (
        <>
            <Button
                color='primary'
                variant='outlined'
                onClick={toggleAllCheckboxes}
            >
                Toggle All
            </Button>
            {
                options.sort((a, b) => a.label > b.label ? 1 : -1).map(({ label, checked, subSection }, index) => {
                    if (subSection !== null) return;
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
            <SubSection text="Styles">
                {
                    options.sort((a, b) => a.label > b.label ? 1 : -1).map(({ label, checked, subSection }, index) => {
                        if (subSection !== "styles") return;
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