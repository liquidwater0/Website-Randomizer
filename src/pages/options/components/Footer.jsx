import React from 'react';
import { Button, IconButton, useTheme } from '@mui/material';
import { Brightness7, Brightness4 } from '@mui/icons-material';

export default function Footer(props) {
    const {
        version,
        darkTheme,
        setDarkTheme,
        setSaveToggle
    } = props;

    const theme = useTheme();
    const footerStyles = {
        backgroundColor: theme.palette.footer
    }

    return (
        <footer className='footer ui-blur shadow' style={footerStyles}>
            <Button 
                color="primary" 
                variant="contained"
                onClick={() => setSaveToggle(prev => !prev)}
            >
                Save
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