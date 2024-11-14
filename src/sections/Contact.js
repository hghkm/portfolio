import React from 'react';
import {
    Box,
    Typography,
    Stack,
    IconButton
} from '@mui/material';
import { GitHub, LinkedIn, Instagram } from '@mui/icons-material';

function Contact() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h6">Thanks for visiting!</Typography>
                <Typography variant="h6">You can find me at any of the following links below:</Typography>
                <Stack direction="row" flexWrap="wrap" marginX="auto">
                    <IconButton color="secondary" href="https://github.com/hghkm">
                        <GitHub/>
                    </IconButton>
                    <IconButton color="secondary" href="https://www.linkedin.com/in/hugh-kim0719/">
                        <LinkedIn/>
                    </IconButton>
                    <IconButton color="secondary">
                        <Instagram/>
                    </IconButton>
                </Stack>
                <Typography variant="h6">Or, email me at <a href="mailto:kimhugh9@gmail.com">kimhugh9@gmail.com</a></Typography>
            </Box>
        </Box>
    )
}

export default Contact;