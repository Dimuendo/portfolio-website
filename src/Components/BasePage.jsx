import React from 'react';
import NavBar from './NavBar'
import Intro from './Intro'
import Projects from './Projects'
import Contact from './Contact'

function BasePage() {
    return (
        <div>
            <NavBar></NavBar>
            <Intro></Intro>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
}

export default BasePage;
