import React, { Fragment } from 'react';
import { Circles } from 'react-loader-spinner';

const Loader = () => {

    const classes = {
        loader: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '300px'
        }
    };

    return (
        <Fragment>
            <div style={classes.loader}>
                <Circles
                    height="80"
                    width="80"
                    radius="9"
                    color="green"
                    ariaLabel="loading"
                    wrapperStyle
                    wrapperClass
                />
            </div>
        </Fragment>
    )
}

export default Loader;