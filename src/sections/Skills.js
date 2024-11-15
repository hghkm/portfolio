import React from 'react';
import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemText,
    Grid2 as Grid,
} from '@mui/material';

const frontEndSkills = [ 'React', 'React Router', 'Redux/Redux Toolkit', 'Quill.js', 'Responsive UI/Design' ];
const responsiveUI = [ 'Chakra UI', 'Reactstrap', 'Bootstrap' ];

const backEndSkills = [ 'Node.js', 'Express.js', 'RESTful API', 'SQL', 'Axios', 'jsPDF' ];
const versionControl = [ 'Github', 'Gitlab', 'Git' ];
const testing = [ 'Jest', 'Puppeteer', 'React Testing Library', 'Jenkins', 'Gitlab CI/CD' ];

function Skills() {

    return (
        <Box sx={{ flexGrow: 1, maxWidth: { xs: '75%', xl: '1200px' } }}>
            <Typography variant="h3">Skills</Typography>
            <br/>
            <Grid container spacing={2}>
                <Grid item size={{ xs: 12, sm: 6, lg: 3 }}>
                    <Typography variant="h6">Frontend Development</Typography>
                    <List>
                        {frontEndSkills.map((skill, i) => (
                            <ListItem key={i}>
                                <ListItemText primary={skill}/>
                            </ListItem>
                        ))}
                        <List component="div" disablePadding sx={{ pl: 4 }}>
                            {responsiveUI.map((ui, i) => (
                                <ListItem key={i}>
                                    <ListItemText primary={ui}/>
                                </ListItem>
                            ))}
                        </List>
                    </List>
                </Grid>

                <Grid item size={{ xs: 12, sm: 6, lg: 3 }}>
                    <Typography variant="h6">Backend Development</Typography>
                    <List>
                        {backEndSkills.map((skill, i) => (
                            <ListItem key={i}>
                                <ListItemText primary={skill}/>
                            </ListItem>
                        ))}
                    </List>
                </Grid>
                
                <Grid item size={{ xs: 12, sm: 6, lg: 3 }}>
                    <Typography variant="h6">Testing & Deployment</Typography>
                    <List>
                        {testing.map((t, i) => (
                            <ListItem key={i}>
                                <ListItemText primary={t}/>
                            </ListItem>
                        ))}
                    </List>
                </Grid>

                <Grid item size={{ xs: 12, sm: 6, lg: 3 }}>
                    <Typography variant="h6">Version Control</Typography>
                    <List>
                        {versionControl.map((v, i) => (
                            <ListItem key={i}>
                                <ListItemText primary={v}/>
                            </ListItem>
                        ))}
                    </List>
                </Grid>

            </Grid>

        </Box>
    )

}

export default Skills;