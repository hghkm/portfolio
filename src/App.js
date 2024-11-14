import React, { useRef, useEffect, useState, useCallback } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Container,
  ThemeProvider,
  CssBaseline,
  styled
} from '@mui/material';
import { Link } from 'react-scroll';
import { theme } from './theme';

import './App.css';
import About from './sections/About';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Contact from './sections/Contact';

const Section = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  // alignItems: 'center',
  justifyContent: 'center',
  padding: '30px 10px 0 10px',
}));

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  position: 'sticky',
}));

const ScrollLink = ({ to, name, offset }) => (
  <Link
    to={to}
    offset={-100}
    spy={true}
    hashSpy={true}
    smooth={true}
    duration={500}
    activeClass='active'
  >
    <Button>{name}</Button>
  </Link>
)

function App() {

    const aboutRef = useRef(null);
    const experienceRef = useRef(null);
    const skillsRef = useRef(null);
    const contactRef = useRef(null);

    const [ offsets, setOffsets ] = useState({ about: 0, experience: 0, skills: 0, contact: 0 });
    const [ zoom, setZoom ] = useState(window.devicePixelRatio);

    const calculateOffsets = useCallback(() => {
      const sectionRefs = {
        about: aboutRef,
        experience: experienceRef,
        skills: skillsRef,
        contact: contactRef,
      };
      const newOffsets = {};
      Object.keys(sectionRefs).forEach((key) => {
        const sectionElement = sectionRefs[key].current;
        if (sectionElement) {
          const sectionHeight = sectionElement.getBoundingClientRect().height;
          newOffsets[key] = -(sectionHeight / 2); // Adjust offset as needed
        }
      });

      setOffsets(newOffsets);
    }, [])

    useEffect(() => {
      const handleResize = () => {
        const newZoom = window.devicePixelRatio;
        if( newZoom !== zoom ) {
          setZoom(newZoom);
          calculateOffsets();
        }
      };

      window.addEventListener('resize', handleResize);
      calculateOffsets();

      return () => {
        window.removeEventListener('resize', handleResize);
      };

    }, [calculateOffsets, zoom]);

    return (
        <div className="App">
            <CssBaseline/>
            <ThemeProvider theme={theme}>
              <StyledAppBar className="appbar">
                <Toolbar>
                  <Typography variant="h6">Portfolio</Typography>
                  <Box ml="auto">
                    <ScrollLink to="about" name="About" offset={offsets.about}/>
                    <ScrollLink to="experience" name="Experience" offset={offsets.experience}/>
                    <ScrollLink to="skills" name="Skills" offset={offsets.skills}/>
                    <ScrollLink to="contact" name="Contact" offset={offsets.contact}/>
                  </Box>
                </Toolbar>
              </StyledAppBar>

              <Container>

                  <Section id="about" ref={aboutRef}>
                    <About />
                  </Section>
                
                  <Section id="experience" ref={experienceRef}>
                    <Experience />
                  </Section>
                
                  <Section id="skills" ref={skillsRef}>
                    <Skills />
                  </Section>
                
                  <Section id="contact" ref={contactRef}>
                    <Contact />
                  </Section>

              </Container>

            </ThemeProvider>
        </div>
    )
}

export default App;