import React, { useState, useEffect } from 'react';
import { useUpdateEffect } from '../../hooks/useUpdateEffect';
import { Button } from '@mui/material';
import SubSection from "../Sections/SubSection";
import Checkbox from "../Checkbox";
import { elementCheckboxes } from '../../../../checkboxes';

export default function ElementSection({ saveToggle }) {
    const [options, setOptions] = useState(elementCheckboxes);
    const [toggleAll, setToggleAll] = useState(true);

    useEffect(() => {
        chrome.storage.sync.get({ elementCheckedStates: elementCheckboxes }, items => {
            setOptions(items.elementCheckedStates);
        });
    }, []);

    useUpdateEffect(() => {
        const storage = {};

        options.forEach(({ storageKey, checked }) => {
            storage.elementCheckedStates = options;
            storage[storageKey] = checked;
        });

        chrome.storage.sync.set(storage);
    }, [saveToggle]);

    function toggleAllCheckboxes() {
        setOptions(prev => {
            const copy = [...prev];
            copy.forEach(checkbox => {
                if (checkbox.storageKey === "elementEnabled") return;
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
                options.map(({ name, checked, subSection }, index) => {
                    if (subSection !== null) return;
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
            <SubSection text="Attributes">
                {
                    options.map(({ name, checked, subSection }, index) => {
                        if (subSection !== "attributes") return;
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
            <SubSection text="Styles">
                {
                    options.map(({ name, checked, subSection }, index) => {
                        if (subSection !== "styles") return;
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