import React, { ReactNode } from 'react';

export default function SubSection({ children, text }: { children: ReactNode, text: string }) {
    return (
        <>
            <h2 className='sub-section-text'>
                <span>{ text }</span>
            </h2>
            { children }
        </>
    );
}