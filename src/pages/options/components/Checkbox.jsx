import React from 'react';
import { Checkbox as MUICheckbox, FormControlLabel } from '@mui/material';

function Checkbox({ index, setOptions, label, ariaLabel, checked }) {
    function handleChange() {
        setOptions(prev => {
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