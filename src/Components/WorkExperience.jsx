import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Typography, Box } from '@material-ui/core';

import ExperienceCard from './ExperienceCard';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#F5F5F6',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: theme.spacing(6),
    },
    sectionTitle: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(1),
    },
    underline: {
        width: '8%',
        background: theme.palette.secondary.main,
        borderWidth: '1.5px',
        borderStyle: 'solid',
        borderColor: theme.palette.secondary.main,
        marginBottom: theme.spacing(6),
    },
}));

// ClearBanc
const cbRoleDescriptions = [
    'Conducting reproductible research to build data products',
    'Working with a team of data scientsts to help transform complex data into meaning insights',
]

// Scotiabank
const sbRoleDescriptions = [
    'Created python scripts that scraped international banking data from various external sources. Then used that data to create models in R that predicted future expected credit losses for Peru using linear regression based on several macroeconomic variables such as copper prices and GDP',
    'Used python-flask to create a calculator along with a web interface that calculated the expected credit losses associated with a given number of defaults and downgrades that the user input',
]

// Motoinsight
const motoRoleDescriptions = [
    'Developed python scripts that employed pandas to track changes across hundreds of excel sheets each with thousands of data points regarding residual and incentive data for different automobiles',
    'Used python to automate the creation of email marketing campaigns by pulling vehicle information and incentives from manufacturer websites and populating custom HTML templates with the data',
]

function WorkExperience(props) {
    const classes = useStyles()

    return (
        <div className={classes.root} ref={props.aboutRef}>
            <Typography variant="h4" className={classes.sectionTitle}>
                <Box fontWeight='fontWeightBold'>
                    WORK EXPERIENCE
                </Box>
            </Typography>
            <Divider className={classes.underline} color='secondary'/>
            <ExperienceCard 
                companyName='Clearbanc'
                position='Data Scientist Co-op'
                technologies='Python, SQL'
                dateRange='September 2020 - December 2020'
                location='Toronto, Ontario'
                roleDescriptions={cbRoleDescriptions}
                filler={true}
            />
            <ExperienceCard 
                companyName='Scotiabank'
                position='Data Scientist Co-op'
                technologies='Python, SQL, Plotly, R, Regression'
                dateRange='January 2020 - April 2020'
                location='Toronto, Ontario'
                roleDescriptions={sbRoleDescriptions}
            />
            <ExperienceCard 
                companyName='Motoinsight'
                position='Software Developer Co-op'
                technologies='Python, Pandas, NumPy'
                dateRange='January 2018 - April 2018'
                location='Toronto, Ontario'
                roleDescriptions={motoRoleDescriptions}
            />
        </div>
    )
}

export default WorkExperience