import React, { useState } from 'react';
import {
  Box, AppBar, Toolbar, IconButton, Avatar,
  List, ListItem, ListItemText, ListItemIcon, ListItemButton,
  Divider, Drawer, Typography, 
} from '@mui/material';
import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

import { styled } from '@mui/system';

const MenuSliderContainer = styled('div')(({ theme }) => ({
  width: 250,
  background: '#222',
  height: '100%',
}));

const SliderAvatar = styled(Avatar)(({ theme }) => ({
  // display: 'block',
  margin: '0.5rem auto',
  width: theme.spacing(14),
  height: theme.spacing(14),
}));

const menuItems = [
  {
    icon: <Home/>,
    text: 'Home',
    link: '/',
  },
  {
    icon: <Apps/>,
    text: 'Portfolio',
    link: '/portfolio',
  },
  {
    icon: <AssignmentInd/>,
    text: 'Resume',
    link: '/resume',
  },
  {
    icon: <ContactMail/>,
    text: 'Contact',
    link: '/contact',
  },
];

const sideList = ( slider, toggleSidebar ) => (
  <MenuSliderContainer onClick={() => toggleSidebar(slider, false)}>
    <SliderAvatar src="" alt="HK"/>
    <Divider/>
    <List>
      {menuItems.map((item, index) => (
        <ListItem key={index} component={Link} to={item.link}>
          <ListItemButton>
            <ListItemIcon sx={{ color: 'tan' }}>{item.icon}</ListItemIcon>
            <ListItemText sx={{ color: 'tan' }} primary={item.text}/>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </MenuSliderContainer>
);

export function Navigation() {
  const [ state, setState ] = useState({});
  
  const toggleSidebar = ( slider, open ) => {
    setState({ ...state, [slider]: open });
  };

  return (
    <>
      <Box component="nav">
        <AppBar position="fixed" style={{ background: '#222' }}>
          <Toolbar>
            
            <IconButton onClick={() => toggleSidebar('right', true)}>
              <ArrowBack style={{ color: 'tomato' }}/>
            </IconButton>
            
            <Typography variant="h5" style={{ color: 'tan' }}>Portfolio</Typography>

            <Drawer
              anchor="right"
              open={state.right}
              onClose={() => toggleSidebar('right', false)}
            >
              {sideList('right', toggleSidebar)}
            </Drawer>

          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}