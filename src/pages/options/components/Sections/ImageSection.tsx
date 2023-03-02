import React, { useState, useEffect } from 'react';
import { useUpdateEffect } from '../../hooks/useUpdateEffect';
import { Button } from '@mui/material';
import Checkbox from "../Checkbox";
import { imageCheckboxes } from '../../../../checkboxes';

export default function ImageSection({ saveToggle }: { saveToggle: boolean }) {
    const [options, setOptions] = useState(imageCheckboxes);
    const [toggleAll, setToggleAll] = useState(true);

    useEffect(() => {
        chrome.storage.sync.get({ imageCheckedStates: imageCheckboxes }, items => {
            setOptions(items.imageCheckedStates);
        });
    }, []);

    useUpdateEffect(() => {
        const storage: { imageCheckedStates?: typeof options } = {};

        options.forEach(({ storageKey, checked }) => {
            storage.imageCheckedStates = options;
            // storage[storageKey] = checked;
        });

        chrome.storage.sync.set(storage);
    }, [saveToggle]);

    function toggleAllCheckboxes() {
        setOptions(prev => {
            const copy = [...prev];
            copy.forEach(checkbox => {
                if (checkbox.storageKey === "imageEnabled") return;
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
                //putting subSection null check for some reason causes nothing to appear even though it works everywhere else.
                options.map(({ name, checked, subSection }, index) => {
                    // if (subSection !== null) return;
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
        </>
    );
}