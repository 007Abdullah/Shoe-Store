import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Footer } from './Footer';
import { Mainheading } from './Mainheading';

const useStyles = makeStyles((theme) => ({
    imgs: {
        display: 'flex',
        justifyContent: 'center',
    }
}))
export default function Home() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Mainheading text="Shoe Store" />
            <div className={classes.imgs}>
                <img src="https://cms-cdn.thesolesupplier.co.uk/2019/01/Nike-Adapt-BB-Black-White-AO2582-001.png" alt="Shoe Store" />
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <Footer />
        </React.Fragment>
    )
}
