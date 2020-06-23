import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ProjectCard from './ProjectCard'
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';

import tftcompsGIF from '../Static/tftcomps.gif'
import pathfindingVisualizerGIF from '../Static/pathfinding_visualizer.gif'
import sortingVisualizerGIF from '../Static/sorting_visualizer.gif'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'red',
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        paddingBottom: theme.spacing(5),
    },
    profilePic: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
        width: 300,
        height: 300,
        borderRadius: '50%',
    },
    titleContainer: {
        paddingBottom: theme.spacing(2),
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        marginTop: theme.spacing(5),
        borderWidth: 'medium'
    },
    title: {

    },
}));

function Projects() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Box borderBottom={1} className={classes.titleContainer}>
            <Typography variant="h3" className={classes.title}>
                Projects
            </Typography>
            </Box>
            <ProjectCard 
                projectTitle='tftcomps.lol' 
                projectDescription='This project was created in ...'
                websiteLink='https://tftcomps.lol/'
                gitHubLink='https://github.com/Dimuendo/tftcomps'
                media={tftcompsGIF}
            />
            <ProjectCard 
                projectTitle='Pathfinding Visualizer' 
                projectDescription='soidfjiosdfidfjs soifjsdifjsdiofjsiofjdiofjsiodf'
                websiteLink='https://dimuendo.github.io/pathfinding-visualizer/'
                gitHubLink='https://github.com/Dimuendo/pathfinding-visualizer'
                media={pathfindingVisualizerGIF}
            />
            <ProjectCard 
                projectTitle='Sorting Visualizer' 
                projectDescription='soidfjiosdfidfjs soifjsdifjsdiofjsiofjdiofjsiodf'
                websiteLink='https://dimuendo.github.io/sorting-visualizer/'
                gitHubLink='https://github.com/Dimuendo/sorting-visualizer'
                media={sortingVisualizerGIF}
            />
        </div>
    );
}

export default Projects;
