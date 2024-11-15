import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: { main: '#64ffda' },
        secondary: { main: '#006d66' },
        text: { primary: '#ccd6f6' },
    },
    typography: {
        fontFamily: 'Roboto Mono, monospace',
    }
});