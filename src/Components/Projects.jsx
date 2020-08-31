import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ProjectCard from './ProjectCard'
import Box from '@material-ui/core/Box';
import { Typography, Divider, Grid, Paper, Card, Container } from '@material-ui/core';

import chip8 from '../Static/chip8.jpg'
import tftcomps from '../Static/tftcomps.jpg'
import pathfindingVisualizer from '../Static/pathfinding_visualizer.jpg'
import sortingVisualizer from '../Static/sorting_visualizer.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#F5F5F6',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: theme.spacing(5),
    },
    gridRoot: {
        flexGrow: 1,
    },
    titleContainer: {
        paddingBottom: theme.spacing(2),
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        marginTop: theme.spacing(5),
        borderWidth: 'medium'
    },
    sectionTitle: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(1),
    },
    underline: {
        width: '8%',
        background: theme.palette.secondary.main,
        borderWidth: '1.5px',
        borderStyle: 'solid',
        borderColor: theme.palette.secondary.main,
        marginBottom: theme.spacing(6),
    },
}));

const chip8Message = 'This project is a CHIP-8 emulator written fully in C++. This emulator supports 35 different opcodes, 16 registers, 16 level-deep stack, 2 timers, 16 input keys, and 64x32 pixel display.'
const tftcompsMessage = 'This website aggregates the match data of the top 1000 players for the online video game Teamfight Tactics, it displays the most popular team compositions and statistics pertaining to items, units, and traits.'
const pathfindingVisualizerMessage = 'This project allows the user to visualize different maze-generation and pathfinding algorithms. Supports Dijkstra\'s A* search, breadth first search, and depth first search.'
const sortingVisualizerMessage = 'This project allows the user to visualize different sorting algorithms. Supports quick sort, bubble sort, merge sort, selection sort and variable animation speeds and array sizes.'

function Projects(props) {
    const classes = useStyles()

    return (
        <div className={classes.root} ref={props.projectsRef}>
            <Typography variant="h4" className={classes.sectionTitle}>
                <Box fontWeight='fontWeightBold'>
                    PROJECTS
                </Box>
            </Typography>
            <Divider className={classes.underline} color='secondary'/>
            <Container maxWidth='fixed'>
                <Grid 
                    container
                    direction='row'
                    justify='center'
                    spacing={3}
                >
                    <Grid item xs={12} sm={6}>
                        <ProjectCard 
                            projectTitle='tftcomps.lol' 
                            projectDescription={tftcompsMessage}
                            websiteLink='https://tftcomps.lol/'
                            gitHubLink='https://github.com/Dimuendo/tftcomps'
                            media={tftcomps}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <ProjectCard 
                            projectTitle='CHIP-8 Emulator' 
                            projectDescription={chip8Message}
                            websiteLink=''
                            gitHubLink='https://github.com/Dimuendo/chip8-emulator'
                            media={chip8}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <ProjectCard 
                            projectTitle='Pathfinding Visualizer' 
                            projectDescription={pathfindingVisualizerMessage}
                            websiteLink='https://dimuendo.github.io/pathfinding-visualizer/'
                            gitHubLink='https://github.com/Dimuendo/pathfinding-visualizer'
                            media={pathfindingVisualizer}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <ProjectCard 
                            projectTitle='Sorting Visualizer' 
                            projectDescription={sortingVisualizerMessage}
                            websiteLink='https://dimuendo.github.io/sorting-visualizer/'
                            gitHubLink='https://github.com/Dimuendo/sorting-visualizer'
                            media={sortingVisualizer}
                        />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Projects;
