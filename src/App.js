import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Toolbar,
  // Typography,
  Box,
  Tabs,
  Tab,
  ThemeProvider,
  CssBaseline,
  styled,
  useMediaQuery
} from '@mui/material';

import { useInView } from 'react-intersection-observer';
import { theme } from './theme';

import './App.css';

import { DownloadResume } from './components/Download';

import { Sections } from './sections';
import About from './sections/About';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Contact from './sections/Contact';


const StyledAppBar = styled(AppBar)(({ theme }) => ({
  position: 'sticky',
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
  scrollBehavior: 'smooth',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8rem',
    padding: '0 4px',
  },
}));

function samePageLinkNavigation(e) {
  if(
    e.defaultPrevented
    || e.button !== 0
    || e.metaKey
    || e.ctrlKey
    || e.altKey
    || e.shiftKey
  ) { return false };
  return true;
}

const LinkTab = (props) => {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        if( samePageLinkNavigation(event) ) {
          event.preventDefault();
        }
      }}
      aria-current={props.selected && 'section'}
      {...props}
    />
  )
}

const sections = [
  { id: 'about', label: 'About', component: About },
  { id: 'experience', label: 'Experience', component: Experience },
  { id: 'skills', label: 'Skills', component: Skills },
  { id: 'contact', label: 'Contact', component: Contact }
];

function App() {

    const [ activeSection, setActiveSection ] = useState( 0 );

    const handleTabChange = ( e, newValue ) => {
      if( e.type !== 'click' || ( e.type === 'click' && samePageLinkNavigation(e) ) ) {
        document.getElementById( sections[newValue].id ).scrollIntoView({
          behavior: 'smooth',
        });
      };
    };

    const { ref, inView } = useInView({
        threshold: 0,
    });

    const setInView = (inView, entry) => {
      const id = entry.target.getAttribute('id');
      if( inView ) {
        setActiveSection( sections.map(section => section.id).indexOf(id) );
      };
    };

    const isXs = useMediaQuery(theme.breakpoints.down('sm'));
    const greaterThanXl = useMediaQuery(theme.breakpoints.up('xl'));

    return (
        <div className="App">
            <CssBaseline/>
            <ThemeProvider theme={theme}>
              {!greaterThanXl && (
                <StyledAppBar className="appbar">
                  <Toolbar>
                    <Box mx="auto" width={isXs ? '100%' : 'auto'}>
                      <StyledTabs
                        value={activeSection}
                        onChange={handleTabChange}
                        indicatorColor={ 'primary'}
                        textColor={ 'primary' }
                        role='navigation'
                        // variant={isMobile ? 'scrollable' : 'standard'}
                        // scrollButtons={isMobile ? 'auto': false}
                        // centered={!isMobile}
                      >
                        {sections.map(( section, index ) => (
                          <LinkTab
                            key={index}
                            label={section.label}
                            href={`#${section.id}`}
                          />
                        ))}
                      </StyledTabs>
                    </Box>
                  </Toolbar>
                </StyledAppBar>
              )}
              
              <Box id="sections-wrapper" ref={ref}>
                <Sections sections={sections} setInView={setInView}/>
              </Box>

              <DownloadResume/>

            </ThemeProvider>
        </div>
    )
}

export default App;