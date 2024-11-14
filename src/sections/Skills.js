import React from 'react';
import {
    Box,
    Divider,
    Typography,
    List,
    ListItem,
    ListItemText,
    Grid2 as Grid,
} from '@mui/material';

function Skills() {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h3">Skills</Typography>
            <br/>
            <Grid container spacing={2}>
                <Grid size={6}>
                    <Typography variant="h6">Frontend Development</Typography>
                    <List>
                        <ListItem>
                            <ListItemText primary="React"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="React Router"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Redux/Redux Toolkit"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Quill.js"/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Responsive UI"/>
                        </ListItem>
                        <List component="div" disablePadding sx={{ pl: 4 }}>
                            <ListItem>
                                <ListItemText primary="Chakra UI"/>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Reactstrap"/>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Bootstrap"/>
                            </ListItem>
                        </List>
                    </List>

                    <Typography variant="h6">Backend Development</Typography>
                    <List>
                        <ListItem>
                            <ListItemText>Node.js</ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>Express.js</ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>RESTful API</ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>SQL</ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>Axios</ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>jsPDF</ListItemText>
                        </ListItem>
                    </List>
                </Grid>

                <Grid size={6}>
                    <Typography variant="h6">Version Control</Typography>
                    <List>
                        <ListItem>
                            <ListItemText>Github</ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>Gitlab</ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>Git</ListItemText>
                        </ListItem>
                    </List>
                    <Typography variant="h6">Testing & Deployment</Typography>
                    <List>
                        <ListItem>
                            <ListItemText>Jest</ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>Puppeteer</ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>React Testing Library</ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>Jenkins</ListItemText>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>

            <Divider />
        </Box>
    )

}

export default Skills;