import React, { useEffect } from 'react';
import "./scss/popup.scss";
import { useChromeStorageSync } from 'use-chrome-storage';
import { ThemeProvider, CssBaseline, Button } from '@mui/material';
import { dark, light } from "../../themes";
import Font from "../../global components/Font";

const manifest = chrome.runtime.getManifest();

export default function Popup() {
    const [theme] = useChromeStorageSync("theme", "dark");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    function openOptionsPage() {
        if (chrome.runtime.openOptionsPage) {
            chrome.runtime.openOptionsPage();
        } else {
            window.open(chrome.runtime.getURL("options.html"));
        }
    }

    return (
        <ThemeProvider theme={ theme === "dark" ? dark : light }>
            <CssBaseline/>
            <Font/>

            <div className="version-text">{ `v${manifest.version}` }</div>
            <main className='main'>
                <h1 className='extension-title'>Website Randomizer</h1>
                <Button 
                    color="primary" 
                    variant="contained"
                    onClick={openOptionsPage}
                >
                    Go To Options
                </Button>
            </main>
        </ThemeProvider>
    );
}