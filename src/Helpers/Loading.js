import React from 'react'
import { CircularProgress } from '@material-ui/core';
export const Load = () => {
    return (
        <div id="loadBar">
            <CircularProgress color="secondary" />
        </div>
    )
}
