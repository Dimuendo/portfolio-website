import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ProjectCard from './ProjectCard'
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';

import chip8 from '../Static/chip8.jpg'
import tftcomps from '../Static/tftcomps.jpg'
import pathfindingVisualizer from '../Static/pathfinding_visualizer.jpg'
import sortingVisualizer from '../Static/sorting_visualizer.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'linear-gradient(45deg, #D7E1EC 0%, #FFFFFF 74%);',
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        paddingBottom: theme.spacing(5),
    },
    titleContainer: {
        paddingBottom: theme.spacing(2),
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        marginTop: theme.spacing(5),
        borderWidth: 'medium'
    },
}));

const chip8Message = 'This project is a CHIP-8 emulator written in C++.'
const tftcompsMessage = 'This website aggregates the match data of the top 1000 players for the online video game Teamfight Tactics, it displays the most popular team compositions and statistics pertaining to items, units, and traits.'
const pathfindingVisualizerMessage = 'This project allows the user to visualize different maze-generation and pathfinding algorithms.'
const sortingVisualizerMessage = 'This project allows the user to visualize different sorting algorithms.'

function Projects(props) {
    const classes = useStyles()

    return (
        <div className={classes.root} ref={props.projectsRef}>
            <Box borderBottom={1} className={classes.titleContainer}>
                <Typography variant="h3" className={classes.title}>
                    Projects
                </Typography>
            </Box>
            <ProjectCard 
                projectTitle='CHIP-8 Emulator' 
                projectDescription={chip8Message}
                websiteLink=''
                gitHubLink='https://github.com/Dimuendo/chip8-emulator'
                media={chip8}
            />
            <ProjectCard 
                projectTitle='tftcomps.lol' 
                projectDescription={tftcompsMessage}
                websiteLink='https://tftcomps.lol/'
                gitHubLink='https://github.com/Dimuendo/tftcomps'
                media={tftcomps}
            />
            <ProjectCard 
                projectTitle='Pathfinding Visualizer' 
                projectDescription={pathfindingVisualizerMessage}
                websiteLink='https://dimuendo.github.io/pathfinding-visualizer/'
                gitHubLink='https://github.com/Dimuendo/pathfinding-visualizer'
                media={pathfindingVisualizer}
            />
            <ProjectCard 
                projectTitle='Sorting Visualizer' 
                projectDescription={sortingVisualizerMessage}
                websiteLink='https://dimuendo.github.io/sorting-visualizer/'
                gitHubLink='https://github.com/Dimuendo/sorting-visualizer'
                media={sortingVisualizer}
            />
        </div>
    );
}

export default Projects;
