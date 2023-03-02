import React from 'react';
import { useTheme, ButtonGroup, Button } from '@mui/material';

export default function Header() {
    const theme = useTheme();
    const headerStyles = {
        backgroundColor: (theme.palette as any).header
    }

    function scrollToSection(selector: string) {
        const section = document.querySelector(selector);
        if (!section) return;
        section.scrollIntoView();
    }

    return (
        <header 
            className='header ui-blur shadow'
            style={headerStyles}
        >
            <ButtonGroup 
                color='primary' 
                aria-label='navigation buttons'
            >
                <Button onClick={() => scrollToSection("#elementSection")}>
                    Element
                </Button>
                <Button onClick={() => scrollToSection("#imageSection")}>
                    Image
                </Button>
                <Button onClick={() => scrollToSection("#textSection")}>
                    Text
                </Button>
                <Button onClick={() => scrollToSection("#optionsSection")}>
                    Options
                </Button>
            </ButtonGroup>
        </header>
    );
}