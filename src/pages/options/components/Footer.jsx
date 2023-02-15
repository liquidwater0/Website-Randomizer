import React, { useState } from 'react';
import { useUpdateEffect } from '../hooks/useUpdateEffect';
import { Button, IconButton, useTheme } from '@mui/material';
import { Brightness7, Brightness4 } from '@mui/icons-material';

export default function Footer(props) {
    const {
        version,
        darkTheme,
        saveToggle,
        setDarkTheme,
        setSaveToggle
    } = props;

    const [buttonText, setButtonText] = useState("Save");

    const theme = useTheme();
    const footerStyles = {
        backgroundColor: theme.palette.footer
    }

    useUpdateEffect(() => {
        let timeout;

        setButtonText("Saved!");
        timeout = setTimeout(() => setButtonText("Save"), 3000);
        
        return () => clearTimeout(timeout);
    }, [saveToggle]);

    return (
        <footer className='footer ui-blur shadow' style={footerStyles}>
            <Button 
                color="primary" 
                variant="contained"
                onClick={() => setSaveToggle(prev => !prev)}
            >
                { buttonText }
            </Button>

            <span className='version-text'>Website Randomizer v{ version }</span>
            
            <IconButton 
                color="primary" 
                size="large"
                aria-label='theme toggle button'
                title="toggle theme"
                onClick={() => setDarkTheme(prev => !prev)}
            >
                { darkTheme ? <Brightness7/> : <Brightness4/> }
            </IconButton>
        </footer>
    );
}