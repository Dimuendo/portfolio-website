import React from 'react'
import profilePic from '../Static/profile_pic.jpg'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#E1E2E1',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    sectionTitle: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(1),
    },
    profilePic: {
        width: 300,
        height: 300,
        marginRight: theme.spacing(5),
        // borderRadius: '80%',
    },
    underline: {
        width: '8%',
        background: theme.palette.secondary.main,
        borderWidth: '1.5px',
        borderStyle: 'solid',
        borderColor: theme.palette.secondary.main,
        marginBottom: theme.spacing(6),
    },
    aboutContainer: {
        marginBottom: theme.spacing(10),
    },
    aboutMessageTitle: {
        marginBottom: theme.spacing(1),
    },
    aboutMessage: {
        width: theme.spacing(50),
        marginBottom: theme.spacing(2),
    },
    aboutDivider: {
        marginRight: theme.spacing(5),
        marginLeft: theme.spacing(5),
        height: theme.spacing(30),
        background: theme.palette.secondary.light,
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: theme.palette.secondary.light,
        alignSelf: 'center',
    },
}));

const techAboutMessageOne = "I am a fifth year student who is currently enrolled in the Computer Science and Business Administration double degree program at the University of Waterloo and Wilfrid Laurier University."
const techAboutMessageTwo = "I have currently completed two co-op terms where I worked as a data scientist at Scotiabank and a software developer at Motoinsight. My third co-op term is currently in progress where I am working as a data scientist at Clearbanc."
const personalAboutMessageOne = "When I'm not studying or creating projects, I fill my time by playing video games and hanging out with friends."
const personalAboutMessageTwo = "I recently got so invested into a game called Teamfight Tactics, a strategy game created by Riot Games, that I managed to rank within the top 300 players in North America at my peak (approximately 1,000,000 total players). This was also a big reason why I created the tftcomps.lol project which you can check out below."

function About(props) {
    const classes = useStyles()

    return (
        <div className={classes.root} ref={props.aboutRef}>
            <Typography variant="h4" className={classes.sectionTitle}>
                <Box fontWeight='fontWeightBold'>
                    ABOUT ME
                </Box>
            </Typography>
            <Divider className={classes.underline} color='secondary'/>
            <Box
                className={classes.aboutContainer}
                display='flex' 
                justifyContent='center'
                flexDirection='row'
            >
                <img src={profilePic} className={classes.profilePic} alt='logo' />
                <Box
                    className={classes.aboutMessageContainer}
                    display='flex'
                    flexDirection='column'
                >   
                    <Typography align='left' variant='h6'>
                        <Box fontWeight='fontWeightBold' className={classes.aboutMessageTitle}>
                            Hi, my name is Andrew Pak!
                        </Box>
                    </Typography>
                    <Typography align='left' variant='body2' className={classes.aboutMessage}>
                        { techAboutMessageOne }
                    </Typography>
                    <Typography align='left' variant='body2' className={classes.aboutMessage}>
                        { techAboutMessageTwo }
                    </Typography>
                </Box>

                <Divider orientation="vertical" className={classes.aboutDivider} flexItem />

                <Box
                    className={classes.aboutMessageContainer}
                    display='flex'
                    flexDirection='column'
                >   
                    <Typography align='left' variant='h6'>
                        <Box fontWeight='fontWeightBold' className={classes.aboutMessageTitle}>
                            My Personal Interests
                        </Box>
                    </Typography>
                    <Typography align='left' variant='body2' className={classes.aboutMessage}>
                        { personalAboutMessageOne }
                    </Typography>
                    <Typography align='left' variant='body2' className={classes.aboutMessage}>
                        { personalAboutMessageTwo }
                    </Typography>
                </Box>
            </Box>
        </div>
    )
}

export default About