import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@mui/material';
import Checkbox from "../Checkbox";
import { imageCheckboxes } from '../../../../checkboxes';

export default function ImageSection({ saveToggle }) {
    const firstRender = useRef(true);
    const [options, setOptions] = useState(imageCheckboxes);
    const [toggleAll, setToggleAll] = useState(true);

    useEffect(() => {
        chrome.storage.sync.get({ imageCheckedStates: imageCheckboxes }, items => {
            setOptions(items.imageCheckedStates);
        });
    }, []);

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }

        const storage = {};

        options.forEach(({ storageKey, checked }) => {
            storage.imageCheckedStates = options;
            storage[storageKey] = checked;
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