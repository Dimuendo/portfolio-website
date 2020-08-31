import React, { createRef } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import NavBar from './NavBar'
import Intro from './Intro'
import About from './About'
import Projects from './Projects'
import InfoBar from './InfoBar';

const APPBAR_HEIGHT = 64

const theme = createMuiTheme({
    palette: {
        primary: {
          main: '#212121',
        },
        secondary: {
            main: '#b71c1c',
        },
        text: {
            primary: '#ffffff',
            secondary: '#000000'
        }
    },
});

function BasePage() {
    const introRef = createRef()
    const aboutRef = createRef()
    const projectsRef = createRef()
    const infoBarRef = createRef()

    return (
        <ThemeProvider theme={theme}>
            <NavBar
                appBarHeight={APPBAR_HEIGHT}
                introRef={introRef}
                aboutRef={aboutRef}
                projectsRef={projectsRef}
                infoBarRef={infoBarRef}
            />
            <div ref={introRef}>
                <Intro></Intro>
            </div>
            <div ref={aboutRef}>
                <About></About>
            </div>
            <div ref={projectsRef}>
                <Projects></Projects>
            </div>
            <div ref={infoBarRef}> 
                <InfoBar></InfoBar>
            </div>
        </ThemeProvider>
    );
}

export default BasePage;
