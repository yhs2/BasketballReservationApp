import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress} from '@material-ui/core';
import useStyles  from "./style";
import UserLocation from './UserLocation/UserLocation';
const UserLocations = ({setCurrentId}) => {
    const classes = useStyles();
    
    return (
        
        <Grid className={classes.Locations} container spacing = {1}>
            <UserLocation />
            <UserLocation />
        </Grid>
        
    )
}

export default UserLocations;