import React from 'react';
import { useParams } from 'react-router-dom';
import data from './../shoeData/data.json';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Mainheading } from './Mainheading';
import { makeStyles } from '@material-ui/core/styles';
import { Footer } from './Footer';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '50%',
        margin: '0 auto'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }
}))

export default function ProductsItem() {
    const classes = useStyles();
    const { id } = useParams();
    const productID = data[id];
    console.log("Products Check", productID);
    return (
        <React.Fragment>
            <Mainheading text="PRODUCT ITEM" />
            <h1 style={{ fontFamily: 'Serif', textAlign: 'center', textShadow: '5px 5px #f5f5f5', }}>Product Name : {productID.name}</h1>
            <h3 style={{ color: 'black', fontFamily: 'Serif', textAlign: 'center' }}>Price : {productID.price}</h3>
            <div className={classes.root}>
                <Grid>
                    <Paper className={classes.paper} elevation={3}>
                        <img src={productID.img} alt={productID.name} />
                    </Paper>
                </Grid>
            </div>
            <Footer />
        </React.Fragment>
    )
}
