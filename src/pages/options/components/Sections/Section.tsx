import React, { ReactNode } from 'react';
import { useTheme } from '@mui/material';

type SectionProps = {
    children: ReactNode,
    text: string,
    id: string
}

export default function Section({ children, text, id }: SectionProps) {
    const theme = useTheme();
    const headingStyles = {
        backgroundColor: (theme.palette as any).sectionHeading
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