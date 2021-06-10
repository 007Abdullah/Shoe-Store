import React from 'react';
import { Mainheading } from './Mainheading';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Image from '../images/Nike-White.png';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '98%',
        margin: '0 auto',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        borderRadius: '20px',
        backgroundImage: './../Nike-White.png'
    }
}))

const styles = {
    paperContainer: {
        // backgroundImage: `url(/static/media/${Image})`
        bac
    }
};
export default function About() {

    const classes = useStyles();

    return (
        <React.Fragment>
            <Mainheading text="ABOUT US" />
            <div className={classes.root}>
                <Grid>
                    <Paper className={classes.paper} elevation={3} style={styles.paperContainer}>
        
                    </Paper>
                </Grid>
            </div>
        </React.Fragment>
    )
}
