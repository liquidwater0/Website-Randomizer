import React, { useEffect, useState } from 'react';
import "./scss/options.scss";
import { useChromeStorageSync } from 'use-chrome-storage';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { dark, light } from "../../themes";
import Font from "../../global components/Font";
import Header from "./components/Header";
import Footer from './components/Footer';
import Section from './components/Sections/Section';
import ImageSection from "./components/Sections/ImageSection";
import TextSection from "./components/Sections/TextSection";
import ElementSection from "./components/Sections/ElementSection";
import OptionsSection from "./components/Sections/OptionsSection";

const manifest = chrome.runtime.getManifest();

export default function Options() {
    const [theme, setTheme] = useChromeStorageSync("theme", "dark");
    const [saveToggle, setSaveToggle] = useState(true); //This is for saving options.

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <ThemeProvider theme={ theme === "dark" ? dark : light }>
            <CssBaseline/>
            <Font/>

            <Header/>

            <main className='main'>
                <Section text="Element Randomizer" id="elementSection">
                    <ElementSection saveToggle={saveToggle}/>
                </Section>
                <Section text="Image Randomizer" id="imageSection">
                    <ImageSection saveToggle={saveToggle}/>
                </Section>
                <Section text="Text Randomizer" id="textSection">
                    <TextSection saveToggle={saveToggle}/>
                </Section>
                <Section text="Randomizer Options" id="optionsSection">
                    <OptionsSection saveToggle={saveToggle}/>
                </Section>
            </main>

            <Footer 
                version={manifest.version}
                theme={theme} 
                saveToggle={saveToggle}
                setTheme={setTheme} 
                setSaveToggle={setSaveToggle}
            />
        </ThemeProvider>
    );
}