import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import Tooltip from '@material-ui/core/Tooltip';
import Resume from '../Static/Andrew_Pak_Resume.pdf'
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    buttonContainer: {
        marginLeft: theme.spacing(3),
    },
    navButtonContainer: {
        marginLeft: 'auto'
    },
    iconButton: {
        marginRight: theme.spacing(1),
    },
    icon: {
        marginRight: theme.spacing(1)
    },
}));

function NavBar(props) {
    const classes = useStyles()
    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop - props.appBarHeight)
    const executeScroll = (ref) => scrollToRef(ref)

    return (
        <Box>
            <AppBar position='fixed'>
                <Toolbar>
                    <Typography variant="h5" className={classes.title} color='textPrimary'>
                        Andrew Pak
                    </Typography>
                    <ButtonGroup className={classes.buttonContainer} variant="text" color='primary'>
                        <Tooltip title='LinkedIn'>
                            <IconButton 
                                className={classes.iconButton}
                                edge='start'  
                                color='secondary' 
                                aria-label='LinkedInIcon' 
                                href='https://www.linkedin.com/in/andrew-pak-5a4580150/' 
                                target='_blank' 
                                rel='noopener noreferrer'
                            >
                                <LinkedInIcon className={classes.icon}></LinkedInIcon>
                                <Typography variant='body1' className={classes.iconLabel} color='textPrimary'>
                                    LinkedIn
                                </Typography>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title='GitHub'>
                            <IconButton 
                                className={classes.iconButton} 
                                edge='start' 
                                color='secondary' 
                                aria-label='GitHubIcon' 
                                href='https://github.com/Dimuendo/' 
                                target='_blank' 
                                rel='noopener noreferrer'
                            >
                                <GitHubIcon className={classes.icon}></GitHubIcon>
                                <Typography variant='body1' className={classes.iconLabel} color='textPrimary'>
                                    GitHub
                                </Typography>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title='Resume'>
                            <IconButton 
                                className={classes.iconButton} 
                                edge='start' 
                                color='secondary' 
                                aria-label='resume' 
                                href={Resume} 
                                target='_blank' 
                                rel='noopener noreferrer'
                            >
                                <InsertDriveFileIcon className={classes.icon}></InsertDriveFileIcon>
                                <Typography variant='body1' className={classes.iconLabel} color='textPrimary'>
                                    Resume
                                </Typography>
                            </IconButton>
                        </Tooltip>
                    </ButtonGroup>
                    <ButtonGroup className={classes.navButtonContainer} variant='text' color='secondary'>
                        <Button
                            className={classes.navButton} 
                            onClick={() => executeScroll(props.aboutRef)} 
                            color="secondary"
                        >
                            <Typography variant='body2' className={classes.iconLabel} color='textPrimary'>
                                About
                            </Typography>
                        </Button>
                        <Button
                            className={classes.navButton} 
                            onClick={() => executeScroll(props.projectsRef)} 
                            color="secondary"
                        >
                            <Typography variant='body2' className={classes.iconLabel} color='textPrimary'>
                                Projects
                            </Typography>
                        </Button>
                        <Button
                            className={classes.navButton} 
                            onClick={() => executeScroll(props.infoBarRef)} 
                            color="secondary"
                        >
                            <Typography variant='body2' className={classes.iconLabel} color='textPrimary'>
                                Contact
                            </Typography>
                        </Button>
                    </ButtonGroup>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </Box>
    )
}

export default NavBar