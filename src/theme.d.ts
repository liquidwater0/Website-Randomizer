import { PaletteOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface PaletteOptions {
        sectionHeading: string,
        header: string,
        footer: string
    }
}