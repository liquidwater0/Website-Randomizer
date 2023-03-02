import React, { Dispatch, SetStateAction } from 'react';
import { Checkbox as MUICheckbox, FormControlLabel } from '@mui/material';

type CheckboxProps = {
    index: number,
    setOptions: Dispatch<SetStateAction<any>>,
    label: string,
    ariaLabel: string,
    checked: boolean
}

function Checkbox({ index, setOptions, label, ariaLabel, checked }: CheckboxProps) {
    function handleChange() {
        setOptions((prev: any) => {
            const optionsCopy = [...prev];
            const currentCheckbox = optionsCopy[index];
            currentCheckbox.checked = !currentCheckbox.checked;
            
            return optionsCopy;
        });
    }

    return (
        <FormControlLabel 
            label={label}
            control={ 
                <MUICheckbox 
                    color='primary'
                    checked={checked}
                    inputProps={{ "aria-label": ariaLabel }}
                    onChange={handleChange}
                /> 
            }
        />
    );
}

export default React.memo(Checkbox);