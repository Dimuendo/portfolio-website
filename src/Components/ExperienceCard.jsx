import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { Box, Divider, Grid, CardContent } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '700px',
        width: '50%',
        margin: '10px 10px 10px 10px'
    },
    divider: {
        marginBottom: theme.spacing(1),
        background: theme.palette.secondary.light,
        borderColor: theme.palette.secondary.light,
    },
    ul: {
        color: 'black',
    },
}));

function ExperienceCard(props) {
    const classes = useStyles()
    const companyName = props.companyName
    const position = props.position
    const technologies = props.technologies
    const dateRange = props.dateRange
    const location = props.location
    const roleDescriptions = props.roleDescriptions

    return (
        <Card className={classes.root} elevation={3}>
            <CardContent>
                <Grid
                    container
                    direction='column'
                >
                    <Typography align='left' variant='h6' color='textSecondary'>
                        <Box fontWeight='fontWeightBold' className={classes.companyName}>
                            {companyName}
                        </Box>
                    </Typography>
                    <Typography align='left' variant='h6' color='textSecondary'>
                        <Box className={classes.position} fontSize={18}>
                            {position}
                        </Box>
                    </Typography>
                </Grid>
                <Divider className={classes.divider}></Divider>
                <Typography align='left' className={classes.technologies} color='textSecondary' component='div'>
                    <Box fontSize={16} fontWeight='fontWeightBold'>
                        {technologies}
                    </Box>
                </Typography>
                <Grid
                    container
                    direction='row'
                    justify='space-between'
                >
                    <Grid item>
                        <Box
                            display='flex'
                            flexDirection='row'
                            alignItems='center'
                        >
                            <Box></Box>
                            <Typography align='left' className={classes.companyDetails} color='textSecondary' component='div'>
                                <Box fontSize={14}>
                                    {dateRange} | {location}
                                </Box>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <ul className={classes.ul}>
                    {roleDescriptions.map((roleDescription, index) => (
                        <li key={index}>
                            <Typography align='left' variant='body2' className={classes.roleDescription}>
                                {roleDescription}
                            </Typography>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}

export default ExperienceCard;
