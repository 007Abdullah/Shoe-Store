import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    main: {
        display: 'flex',
        justifyContent: 'center'
    },
    Socialicons: {

    }
}))

export const Footer = () => {

    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.main}>
                <hr style={{ color: 'black' }} />
                <h1>Developer: Muhammad Abdullah</h1>
                <br />
                <div className={classes.Socialicons}>
                        
                </div>
            </div>
        </React.Fragment>
    )
}
