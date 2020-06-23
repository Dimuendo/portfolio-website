import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'green',
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        paddingBottom: theme.spacing(5),
    },
    titleContainer: {
        paddingBottom: theme.spacing(2),
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        marginTop: theme.spacing(5),
        borderWidth: 'medium'
    },
    contactForm: {
        paddingBottom: theme.spacing(30),
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        alginItems: 'flex-start',
    },
    nameField: {
        marginTop: theme.spacing(5),
    },
    emailField: {
        marginTop: theme.spacing(1)
    },
    messageField: {
        marginTop: theme.spacing(1)
    },
    submitButton: {
        marginTop: theme.spacing(3),
        width: theme.spacing(15),
    }
}));



function Contact() {
    const classes = useStyles()
    const [nameValue, setNameValue] = React.useState('')
    const [emailValue, setEmailValue] = React.useState('')
    const [messageValue, setMessageValue] = React.useState('')
    const [sent, setSent] = React.useState(false)

    const handleNameChange = (event) => {
        setNameValue(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmailValue(event.target.value);
    };
    const handleMessageChange = (event) => {
        setMessageValue(event.target.value);
    };

    const resetForm = () => {
        setNameValue('')
        setEmailValue('')
        setMessageValue('')
    }

    const formSubmit = (event) => {
        event.preventDefault()
      
        let data = {
            name: nameValue,
            email: emailValue,
            message: messageValue,
        }
        
        console.log('sdfhuidshfduif')
        setSent(true)
        resetForm()
    }

    return (
        <div className={classes.root}>
            <Box borderBottom={1} className={classes.titleContainer}>
            <Typography variant='h3' className={classes.title}>
                Contact Me
            </Typography>
            </Box>
            <form className={classes.contactForm}>
                <TextField
                    id='name-field'
                    className={classes.nameField}
                    label='Name'
                    multiline
                    rows={1}
                    variant='outlined'
                    value={nameValue}
                    onChange={handleNameChange}
                />
                <TextField
                    id='email-field'
                    className={classes.emailField}
                    label='Email'
                    multiline
                    rows={1}
                    variant='outlined'
                    value={emailValue}
                    onChange={handleEmailChange}
                />
                <TextField
                    id='message-field'
                    className={classes.messageField}
                    label='Message'
                    multiline
                    rows={5}
                    variant='outlined'
                    value={messageValue}
                    onChange={handleMessageChange}
                />
                <Button type='submit' className={classes.submitButton} onClick={formSubmit} variant="contained" color="primary">
                    Submit
                </Button>
            </form>
        </div>
    );
}

export default Contact;