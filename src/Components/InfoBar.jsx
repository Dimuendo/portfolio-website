import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import GitHubIcon from '@material-ui/icons/GitHub';
import Resume from '../Static/Andrew_Pak_CV.pdf'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    iconButton: {
        marginRight: theme.spacing(3)
    },
    icon: {
        marginRight: theme.spacing(1)
    },
}));

function InfoBar(props) {
    const classes = useStyles()
    const screenWidth = window.innerWidth

    return (
        <AppBar position='static' ref={props.infoBarRef} className={classes.root}>
            <Toolbar>
                {screenWidth > 800 &&
                <IconButton edge='start' className={classes.iconButton} color='inherit' aria-label='LinkedInIcon' href='https://www.linkedin.com/in/andrew-pak-5a4580150/' target='_blank' rel='noopener noreferrer'>
                    <LinkedInIcon className={classes.icon}></LinkedInIcon>
                    <Typography variant='body1' className={classes.iconLabel}>
                        LinkedIn
                    </Typography>
                </IconButton>}
                {screenWidth > 800 &&
                <IconButton edge='start' className={classes.iconButton} color='inherit' aria-label='GitHubIcon' href='https://github.com/Dimuendo/' target='_blank' rel='noopener noreferrer'>
                    <GitHubIcon className={classes.icon}></GitHubIcon>
                    <Typography variant='body1' className={classes.iconLabel}>
                        GitHub
                    </Typography>
                </IconButton>}
                {screenWidth > 800 &&
                <IconButton edge='start' className={classes.iconButton} color='inherit' aria-label='resume' href={Resume} target='_blank' rel='noopener noreferrer'>
                    <InsertDriveFileIcon className={classes.icon}></InsertDriveFileIcon>
                    <Typography variant='body1' className={classes.iconLabel}>
                        Resume
                    </Typography>
                </IconButton>}
                <IconButton edge='start' className={classes.iconButton} color='inherit' aria-label='EmailIcon' href='mailto:andrew.pak98@gmail.com' target='_blank' rel='noopener noreferrer'>
                    <MailOutlineIcon className={classes.icon}></MailOutlineIcon>
                    <Typography variant='body1' className={classes.iconLabel}>
                        andrew.pak98@gmail.com
                    </Typography>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default InfoBar;
