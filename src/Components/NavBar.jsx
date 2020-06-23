import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    buttonContainer: {
        marginLeft: theme.spacing(3),
    },
    navTitleContainer: {
        marginLeft: 'auto'
    },
    IconButton: {
        // marginLeft: theme.spacing(1),
    },
    title: {
    },
}));

function NavBar() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant="h5" className={classes.title}>
                        Andrew Pak
                    </Typography>
                    <div className={classes.buttonContainer}>
                        <IconButton edge="start" className={classes.iconButton} color="inherit" aria-label="LinkedInIcon">
                            <LinkedInIcon></LinkedInIcon>
                        </IconButton>
                        <IconButton edge="start" className={classes.iconButton} color="inherit" aria-label="GitHubIcon">
                            <GitHubIcon></GitHubIcon>
                        </IconButton>
                    </div>
                    <div className={classes.navTitleContainer}>
                        <Button color="inherit">About Me</Button>
                        <Button color="inherit">Projects</Button>
                        <Button color="inherit">Contact</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar;
