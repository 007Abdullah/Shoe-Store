import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    heading: {
        color: 'black',
        fontFamily: 'Serif',
        textAlign: 'center',
        textShadow: '5px 4px #f5f5f5',
        fontSize: '40px'
    }
}))
export const Mainheading = (props) => {

    const classes = useStyles();

    return (
        <React.Fragment>
            <hr style={{ width: '100px', marginTop: '30px' }} />
            <h1 className={classes.heading}>{props.text}</h1>
            <hr style={{ width: '100px' }} />
        </React.Fragment>
    )
}
