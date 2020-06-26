import React, { useRef } from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import Tooltip from '@material-ui/core/Tooltip';
import Resume from '../Static/Andrew_Pak_CV.pdf'
import Intro from './Intro'
import Projects from './Projects'
import InfoBar from './InfoBar';

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
    iconButton: {
        marginRight: theme.spacing(3)
    },
    icon: {
        marginRight: theme.spacing(1)
    },
    title: {
    },
}));

const theme = createMuiTheme({
    palette: {
        primary: {
          main: '#263238',
        },
        secondary: {
            main: '#263238',
        },
    },
});

function BasePage() {
    const introRef = useRef(null)
    const projectsRef = useRef(null)
    const infoBarRef = useRef(null)
    const classes = useStyles()
    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
    const executeScroll = (ref) => scrollToRef(ref)

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <AppBar position='static'>
                    <Toolbar>
                        <Typography variant="h5" className={classes.title}>
                            Andrew Pak
                        </Typography>
                        <div className={classes.buttonContainer}>
                            <Tooltip title='LinkedIn'>
                                <IconButton edge='start' className={classes.iconButton} color='inherit' aria-label='LinkedInIcon' href='https://www.linkedin.com/in/andrew-pak-5a4580150/' target='_blank' rel='noopener noreferrer'>
                                    <LinkedInIcon className={classes.icon}></LinkedInIcon>
                                    <Typography variant='body1' className={classes.iconLabel}>
                                        LinkedIn
                                    </Typography>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title='GitHub'>
                                <IconButton edge='start' className={classes.iconButton} color='inherit' aria-label='GitHubIcon' href='https://github.com/Dimuendo/' target='_blank' rel='noopener noreferrer'>
                                    <GitHubIcon className={classes.icon}></GitHubIcon>
                                    <Typography variant='body1' className={classes.iconLabel}>
                                        GitHub
                                    </Typography>
                                </IconButton>
                            </Tooltip>
                            <Tooltip title='Resume'>
                                <IconButton edge='start' className={classes.iconButton} color='inherit' aria-label='resume' href={Resume} target='_blank' rel='noopener noreferrer'>
                                    <InsertDriveFileIcon className={classes.icon}></InsertDriveFileIcon>
                                    <Typography variant='body1' className={classes.iconLabel}>
                                        Resume
                                    </Typography>
                                </IconButton>
                            </Tooltip>
                        </div>
                        <div className={classes.navTitleContainer}>
                            {/* <Button onClick={() => executeScroll(introRef)} color="inherit">About Me</Button> */}
                            <Button onClick={() => executeScroll(projectsRef)} color="inherit">Projects</Button>
                            <Button onClick={() => executeScroll(infoBarRef)} color="inherit">Contact</Button>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
            <div ref={introRef}>
                <Intro></Intro>
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
