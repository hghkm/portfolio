import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: { main: '#64ffda' },
        text: { primary: '#ccd6f6' },
    },
    typography: {
        fontFamily: 'Roboto Mono, monospace',
    }
});