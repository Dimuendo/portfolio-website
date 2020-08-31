import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardContent, CardActions } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';

const useStyles = makeStyles((theme) => ({
    root: {
    },
    mediaBig: {
        height: 0,
        paddingTop: '56.25%',
    },
    cardContent: {
    },
    icon: {
        marginRight: theme.spacing(1),
    },
    iconLabel: {
        color: 'black',
    },
}));

function ProjectCard(props) {
    const classes = useStyles()
    const projectTitle = props.projectTitle
    const projectDescription = props.projectDescription
    const websiteLink = props.websiteLink
    const media = props.media

    // const matches = useMediaQuery('(min-width:700px)');

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.mediaBig}
                image={media}
                title='Project Image'
            />
            <CardContent className={classes.cardContent}>
                <Typography align='left' gutterBottom variant='h5' component='h2' color='textSecondary'>
                    {projectTitle}
                </Typography>
                <Typography align='left' variant='body2' component='p' color='textSecondary'>
                    {projectDescription}
                </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                {websiteLink !== '' &&
                <Button className={classes.gitHubButton} target='_blank' rel='noopener noreferrer' size='small' color='secondary' href={websiteLink}>
                    <LanguageIcon className={classes.icon}></LanguageIcon>
                    <Typography variant='body1' className={classes.iconLabel} color='secondary'>
                        Go to Website
                    </Typography>
                </Button>
                }
                <Button edge='start' className={classes.gitHubButton} color='secondary' aria-label='GitHubIcon' href={props.gitHubLink} target='_blank' rel='noopener noreferrer'>
                    <GitHubIcon className={classes.icon}></GitHubIcon>
                    <Typography variant='body1' className={classes.iconLabel} color='secondary'>
                        GitHub
                    </Typography>
                </Button>
            </CardActions>
        </Card>
    );
}

export default ProjectCard;
