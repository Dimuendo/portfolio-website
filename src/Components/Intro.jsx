import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Divider, ThemeProvider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'linear-gradient(45deg, #3EADCF 0%, #ABE9CD 74%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: theme.spacing(5),
        height: '90vh',
    },nameContainer: {
        marginTop: theme.spacing(25),
    },
    divider: {
        width: '20%',
        background: theme.palette.secondary.main,
        borderWidth: '1.5px',
        borderStyle: 'solid',
        borderColor: theme.palette.secondary.main,
        marginBottom: theme.spacing(2)
    }
}));

function Intro(props) {
    const classes = useStyles()

    return (
        <div className={classes.root} ref={props.introRef}>
            <Box className={classes.nameContainer}>
                <Typography variant="h2" className={classes.name}>
                    <Box fontWeight='fontWeightBold'>
                        ANDREW PAK
                    </Box>
                </Typography>
            </Box>
            <Divider className={classes.divider} color='secondary'/>
            <Typography variant="h5" className={classes.name}>
                <Box fontWeight='fontWeightBold'>
                    Computer Science and Business Double Degree
                </Box>
            </Typography>
        </div>
    );
}

export default Intro;
