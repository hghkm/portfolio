import React from 'react';
import { Box, Divider, Typography } from '@mui/material';

function About() {

    return (
        <Box>
            <Typography variant="h3">Hugh Kim</Typography>
            <br/>
            <Typography variant="h5">JavaScript Developer</Typography>
            <Typography variant="body1">I build intuitive, scalable applications for the web.</Typography>
            <Divider />
            <br/>
            <Typography variant="body1">
                I'm a developer with experience in crafting robust and intuitive user interfaces.
                My primary focuses are on both frontend and backend technologies to realize new innovative ideas. 
                With a deep understanding of modern frameworks and libraries such as React and Express/Node.js,
                I strive to build efficient and scalable applications.
            </Typography>
            <br/>
            <Typography variant="body1">
                Currently, my role is as JavaScript Developer at ImageCraft building its user interface and numerous features for gallery and domain hosting.
                Now I contribute to the planning, development and maintenance of UI components that power ImageCraft's frontend,
                ensuring the platform delivers a unique and valuable experience for artists and photographers.
            </Typography>
            <br/>
            <Typography variant="body1">
                Outside of working hours, you can find me either going for a run,
                listening to an audiobook,
                supporting my older brothers in their music careers,
                or jogging around the Mojave Wasteland looking for Sunset Sarsaparilla star bottlecaps.
            </Typography>
        </Box>
    )

}

export default About;