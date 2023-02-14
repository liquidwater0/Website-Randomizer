import React from 'react';

export default function SubSection({ children, text }) {
    return (
        <>
            <h2 className='sub-section-text'>
                <span>{ text }</span>
            </h2>
            { children }
        </>
    );
}