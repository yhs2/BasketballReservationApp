import React, { useEffect } from 'react';
import { Grid, CircularProgress} from '@material-ui/core';
import useStyles  from "./style";
import UserLocation from './UserLocation/UserLocation';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLocation } from '../../../actions/location';
const UserLocations = () => {
    const locations = useSelector((state) => state?.location.post)
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchLocation())
        
    }, [dispatch])
    
    return (
        
        <Grid  className={classes.Locations} container spacing = {1}>
            {locations.map((location) => (
                <Grid key={location._id}>
                    <UserLocation post={location}/>
                </Grid>
                
                
            ))}
        </Grid>
        
    )
}

export default UserLocations;