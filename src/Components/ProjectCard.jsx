import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardContent, CardActions } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
    rootBig: {
        marginTop: theme.spacing(5),
        maxWidth: 640,
    },
    mediaBig: {
        height: 360,
        width: 640,
    },
    rootSmall: {
        marginTop: theme.spacing(5),
        maxWidth: 256,
    },
    mediaSmall: {
        height: 144,
        width: 256,
    },
    cardContent: {
    }
}));

function ProjectCard(props) {
    const classes = useStyles()
    const projectTitle = props.projectTitle
    const projectDescription = props.projectDescription
    const websiteLink = props.websiteLink
    const media = props.media

    const matches = useMediaQuery('(min-width:700px)');

    return (
        <Card className={matches ? classes.rootBig : classes.rootSmall}>
            <CardMedia
                className={matches ? classes.mediaBig : classes.mediaSmall}
                image={media}
                title='Project Image'
            />
            <CardContent className={classes.cardContent}>
                <Typography align='left'  gutterBottom variant='h5' component='h2'>
                    {projectTitle}
                </Typography>
                <Typography align='left' variant='body2' component='p'>
                    {projectDescription}
                </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                {websiteLink !== '' &&
                <Button target='_blank' rel='noopener noreferrer' size='small' color='primary' href={websiteLink}>
                    Go to Website
                </Button>
                }
                <IconButton edge='start' className={classes.gitHubButton} color='inherit' aria-label='GitHubIcon' href={props.gitHubLink} target='_blank' rel='noopener noreferrer'>
                    <GitHubIcon></GitHubIcon>
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default ProjectCard;
