import React from 'react';
import { Mainheading } from './Mainheading';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import data from './../shoeData/data.json';
import { Link } from 'react-router-dom';
import { Footer } from './Footer'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '80%',
        margin: '0 auto'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }
}));

export default function Products() {
    const classes = useStyles();


    console.log("Data Check How Coming", data)

    return (
        <React.Fragment>
            <Mainheading text="Products" />
            <br />
            <div className={classes.root}>
                <Grid container spacing={3}>
                    {Object.keys(data).map((value, index) => {
                        const product = data[value];
                        return (
                            <Grid item xs={6} sm={4} key={index}>
                                <Paper className={classes.paper}>
                                    <Link to={`/products/${value}`} style={{ textDecoration: 'none', fontFamily: 'Serif' }}>
                                        <img src={product.img} alt="Shoes" style={{ width: '90%' }} />
                                        <h3 style={{ color: 'black' }}>{product.name}</h3>
                                        <h4 style={{ color: 'black' }}>{product.price}</h4>
                                    </Link>
                                </Paper>
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
            <Footer />
        </React.Fragment>
    )
}
