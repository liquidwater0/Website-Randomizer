import React, { useState, Dispatch, SetStateAction } from 'react';
import { useUpdateEffect } from '../hooks/useUpdateEffect';
import { Button, IconButton, useTheme } from '@mui/material';
import { Brightness7, Brightness4 } from '@mui/icons-material';

type FooterProps = {
    version: string,
    theme: string,
    saveToggle: boolean,
    setTheme: Dispatch<SetStateAction<string>>,
    setSaveToggle: Dispatch<SetStateAction<boolean>>
}

export default function Footer({ version, theme, saveToggle, setTheme, setSaveToggle }: FooterProps) {
    const [buttonText, setButtonText] = useState<string>("Save");

    const muiTheme = useTheme();
    const footerStyles = {
        backgroundColor: (muiTheme.palette as any).footer
    }

    useUpdateEffect(() => {
        let timeout: NodeJS.Timeout;

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
                onClick={() => setTheme(prev => prev === "dark" ? "light" : "dark")}
            >
                { theme === "dark" ? <Brightness7/> : <Brightness4/> }
            </IconButton>
        </footer>
    );
}