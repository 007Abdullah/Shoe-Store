import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    heading: {
        color: 'black',
        fontFamily: 'Serif',
        textAlign: 'center',
        textShadow: '5px 4px #f5f5f5',
        fontSize: '40px'
    },
    imgs: {
        display: 'flex',
        justifyContent: 'center',
    }
}))
export default function Home() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <hr style={{ width: '100px', marginTop: '30px' }} />
            <h1 className={classes.heading}>Shoe Store</h1>
            <hr style={{ width: '100px' }} />
            <div className={classes.imgs}>
                <img src="https://cms-cdn.thesolesupplier.co.uk/2019/01/Nike-Adapt-BB-Black-White-AO2582-001.png" alt="Shoe Store" />
            </div>
        </React.Fragment>
    )
}
