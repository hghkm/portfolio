import React from 'react';
import {
    Box,
    Divider,
    Typography,
    Grid2 as Grid,
    Stack,
    Chip,
    Link
} from '@mui/material';

function Experience() {

    return (
        <Box sx={{ flexGrow: 1, maxWidth: { xs: '75%', xl: '1200px' } }}>
            <Typography variant="h3">Experience</Typography>
            <Divider />
            <br />
            <Grid container spacing={2}>
                <Grid size={{xs: 12, md: 4}}>
                    <Typography variant="body1">
                        March 2024 - Present
                    </Typography>
                </Grid>
                <Grid size={{xs: 12, md: 8}}>
                    <Typography variant="h4">
                        JavaScript Developer
                    </Typography>
                    <Typography variant="h6">
                        <Link href="https://imagecraft.art" color="secondary" target="_blank" rel="noopener noreferrer">
                            ImageCraft
                        </Link>
                    </Typography>
                    <Typography variant="body1">
                        Build, style and maintain foundational components used to construct application's user interface.
                        Expand scope of project to introduce artist gallery and domain system.
                        Add and maintain new UI features to increase usability and customer win rate. 
                    </Typography>
                    <Stack direction="row" spacing={1} marginTop={1} flexWrap={'wrap'}>
                        <Chip label="JavaScript" color="primary"/>
                        <Chip label="React" color="primary"/>
                        <Chip label="Quill.js" color="primary"/>
                        <Chip label="Redux-Toolkit" color="primary"/>
                        <Chip label="Chakra-UI" color="primary"/>
                    </Stack>
                </Grid>
            </Grid>

            <br />

            <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Typography variant="body1">
                        May 2024 - Present
                    </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 8 }}>
                    <Typography variant="h4">
                        Software Developer
                    </Typography>
                    <Typography variant="h6">
                        Stealth
                    </Typography>
                    <Typography variant="body1">
                        Introduce vendor tracking and reporting system for customer organizations.
                        Restructure application timezone data to support user access for any geolocation.
                        Add and maintain querying for date/time and interval-based filters on thousands of entries.
                    </Typography>
                    <Stack direction="row" spacing={1} marginTop={1} flexWrap={'wrap'}>
                        <Chip label="Express/Node.js" color="primary"/>
                        <Chip label="SQL" color="primary"/>
                        <Chip label="React" color="primary"/>
                        <Chip label="Reactstrap" color="primary"/>
                    </Stack>
                </Grid>
            </Grid>

            <br />
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Typography variant="body1">
                        April 2021 - June 2022
                    </Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 8 }}>
                    <Typography variant="h4">
                        Software Engineer
                    </Typography>
                    <Typography variant="h6">
                        <Link href="https://finicast.com" color="secondary" target="_blank" rel="noopener noreferrer">
                            Finicast
                        </Link>
                    </Typography>
                    <Typography variant="body1">
                        Implement new REST API endpoints for developer access to company data.
                        Increase testing coverage and reinforce CI/CD pipeline on both client and server.
                        Develop simple and complex graphing for customer spreadsheet data.
                        Collaborate with project managers and executives to design new features and improve usability.
                    </Typography>

                    <Stack direction="row" spacing={1} marginTop={1} flexWrap={'wrap'}>
                        <Chip label="Express/Node.js" color="primary"/>
                        <Chip label="Puppteer" color="primary"/>
                        <Chip label="Jest" color="primary"/>
                        <Chip label="Plotly" color="primary"/>
                    </Stack>
                </Grid>
            </Grid>
            
        </Box>
    )

}

export default Experience;