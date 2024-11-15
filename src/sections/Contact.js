import React from 'react';
import {
    Box,
    Typography,
    Stack,
    Divider,
    IconButton
} from '@mui/material';
import { GitHub, LinkedIn, Instagram } from '@mui/icons-material';

function Contact() {
    return (
        <Box sx={{ flexGrow: 1, maxWidth: { xs: '75%', xl: '1200px' } }}>
            <Typography variant="h3">Contact</Typography>
            <Divider />
            <br />
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h6">Thanks for visiting!</Typography>
                <Typography variant="h6">You can find me at any of the following links below:</Typography>
                <Stack direction="row" flexWrap="wrap" marginX="auto">
                    <IconButton color="secondary" href="https://github.com/hghkm" target="_blank" rel="noopener noreferrer">
                        <GitHub/>
                    </IconButton>
                    <IconButton color="secondary" href="https://www.linkedin.com/in/hugh-kim0719/" target="_blank" rel="noopener noreferrer">
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