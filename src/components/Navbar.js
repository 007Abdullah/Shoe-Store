import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    nav: {
        backgroundColor: 'black',
    },
    align: {
        width: '50%',
        display: 'flex',
        justifyContent: 'space-evenly',
        padding: theme.spacing(1),
        margin: '0 auto'
    },
    link: {
        color: 'white',
        fontFamily: 'Serif',
        textDecoration: 'none'
    }
}));

export default function NavBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.nav}>
                <div className={classes.align}>
                    <Typography variant="h6" color="inherit">
                        <Link to="/" className={classes.link}> Home</Link>
                    </Typography>
                    <Typography variant="h6" color="inherit">
                        <Link to="/products" className={classes.link}> Products </Link>
                    </Typography>
                    <Typography variant="h6" color="inherit">
                        <Link to="/about" className={classes.link}> About Us </Link>
                    </Typography>

                </div>
            </AppBar>
        </div>
    );
}
