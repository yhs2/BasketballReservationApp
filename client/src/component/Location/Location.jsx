import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress, Paper, Container} from '@material-ui/core';
import UserLocation from "./UserLocation/UserLocation"
import useStyles from './style'
import LocationForm from './LocationForm/LocationForm';
const Locations = ({setCurrentId}) => {
    // const { locations, isLoading } = useSelector((state) => state.locations);
    const classes = useStyles();
    return (
    <Container maxWidth="xl">
        <Grid container justifyContent="space-between" alignItems="stretch" spacing={3} direction="row">
            <Grid item xs={12} sm={4} md={8}>
                <Paper  elevation={3} variant="outlined"  className={classes.container}>
                    this is locations
                </Paper>
            </Grid>
            <Grid item xs={12} sm={4} md={4} >
                <Paper  elevation={3} variant="outlined"  className={classes.container}>
                    <LocationForm />
                </Paper>
            </Grid>
            
        </Grid>
    </Container>
    )
}

export default Locations;