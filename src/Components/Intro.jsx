import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import profilePic from '../Static/profile_pic.jpg'
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'green',
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
    nameContainer: {
        paddingBottom: theme.spacing(2),
        marginBottom: theme.spacing(2),
        borderWidth: 'thick'
    },
}));

function Intro() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <img src={profilePic} className={classes.profilePic} alt="logo" />
            <Box borderBottom={1} className={classes.nameContainer}>
                <Typography variant="h3" className={classes.name}>
                    Andrew Pak
                </Typography>
            </Box>
            <Typography variant="h6" className={classes.name}>
                Computer Science and Business Double Degree
            </Typography>
        </div>
    );
}

export default Intro;
