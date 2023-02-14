import React from 'react';
import { useTheme } from '@mui/material';

export default function Section({ children, text, id }) {
    const theme = useTheme();
    const headingStyles = {
        backgroundColor: theme.palette.sectionHeading
    }

    return (
        <section className='section' id={id}>
            <h1 
                className='section-text'
                style={headingStyles}
            >
                { text }
            </h1>
            { children }
        </section>
    );
}