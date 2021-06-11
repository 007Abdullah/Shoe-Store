import React from 'react';
import { Mainheading } from './Mainheading';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import background from './../images/nike.jpg';
import {Footer} from './Footer'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '99%',
        margin: '0 auto',
    },
    paper: {
        borderRadius: '20px',
        color: theme.palette.text.secondary,
        boxShadow: "'20px', 10px 10px 10px rgba(14, 12, 12, 0.534)"
    }
}))


export default function About() {

    const classes = useStyles();
    return (
        <React.Fragment>
            <Mainheading text="ABOUT US" />
            <div className={classes.root}>
                <Grid>
                    <Paper className={classes.paper} elevation={3}>
                        <div style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url(${background})`, height: '1270px', borderRadius: '20px', boxShadow: "'20px', 10px 10px 10px rgba(14, 12, 12, 0.534)" }}>
                            <h1 style={{ display: 'inline-block', marginLeft: '100px', marginTop: '370px', color: '#5d0137', fontFamily: 'Serif', textShadow: '2px 4px 2px #e7d8e1' }}>OUR MISSION</h1>
                            <h2 style={{ display: 'flex', width: '450px', textAlign: 'center', color: 'black', fontFamily: 'Serif', textTransform: 'capitalize' }}>"BRING INSPIRATION AND INNOVATION TO EVERY ATHLETE* IN THE WORLD"</h2>
                        </div>
                    </Paper>
                </Grid>
                <Footer />
            </div>
        </React.Fragment >
    )
}
