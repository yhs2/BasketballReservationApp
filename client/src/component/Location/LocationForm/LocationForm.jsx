import React , { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyles  from "./style";
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux';
import { postLocation, updatedLocation, fetchLocation } from '../../../actions/location';
import { SETLOCATION } from '../../../constants/actionType'

const LocationForm = () => {
    const dispatch = useDispatch()
    const classes = useStyles()
    const updateLocationId = useSelector(state => state.location.formLocation);
    const updateLocation = useSelector(state => state.location.post.find(post => post._id === updateLocationId))
    const [location,setLocation] = useState({
        location : '',
        maximumCapacity: 0,
        notes : '',
        addressType : '',
        addressLine : '',
        City : '',
        Province : '',
        Zip : '',
        courtImage: '',
        Country : ''
    })

    useEffect(() => {
        if(updateLocationId){
            setLocation({
                location : updateLocation.location,
                maximumCapacity: updateLocation.maximumCapacity,
                notes : updateLocation.notes,
                addressType : updateLocation.addressType,
                addressLine : updateLocation.addressLine,
                City : updateLocation.City,
                Province : updateLocation.Province,
                Zip : updateLocation.Zip,
                courtImage: updateLocation.courtImage,
                Country : updateLocation.Country
            })
        }
    },[updateLocationId])
    
    const handleChange = (event) => {
        const { name, value} = event.target;
        setLocation({
            ...location,
            [name] : value
        })
    }

    const handleLocationSubmit = async (event) => {
        event.preventDefault();
        if(updateLocationId){
            dispatch(updatedLocation(updateLocationId , {...location}))
            clearForm()
        }
        else{
            dispatch(postLocation({...location}))
            clearForm()
        }       
    }

    const clearForm = () => {
        setLocation({
            location : '',
            maximumCapacity: 0,
            notes : '',
            addressType : '',
            addressLine : '',
            City : '',
            Province : '',
            Zip : '',
            courtImage: '',
            Country : ''
        })
        dispatch({ type: SETLOCATION, payload: null })
    }
        return (
        
            <form autoComplete="off" noValidate onSubmit={handleLocationSubmit}>
                <Typography variant="h6"> {updateLocationId ? 'Update Location' : 'Submit location'} </Typography>
                <TextField 
                    className={classes.textField}
                    name="location" 
                    variant="outlined" 
                    label="Title" 
                    fullWidth
                    value={location.location}
                    onChange={handleChange}
                />
                <TextField 
                    className={classes.textField}
                    name="maximumCapacity" 
                    variant="outlined" 
                    label="maximumCapacity" 
                    fullWidth
                    value={location.maximumCapacity}
                    onChange={handleChange}
                />
                <TextField 
                    className={classes.textField}
                    name="notes" 
                    variant="outlined" 
                    label="notes" 
                    fullWidth
                    value={location.notes}
                    onChange={handleChange}
                />
                <TextField 
                    className={classes.textField}
                    name="addressType" 
                    variant="outlined" 
                    label="addressType" 
                    fullWidth
                    value={location.addressType}
                    onChange={handleChange}
                />
                <TextField 
                    className={classes.textField}
                    name="addressLine" 
                    variant="outlined" 
                    label="addressLine" 
                    fullWidth
                    value={location.addressLine}
                    onChange={handleChange}
                />
                <TextField 
                    className={classes.textField}
                    name="City" 
                    variant="outlined" 
                    label="City" 
                    fullWidth
                    value={location.City}
                    onChange={handleChange}
                />
                <TextField 
                    className={classes.textField}
                    name="Province" 
                    variant="outlined" 
                    label="Province" 
                    fullWidth
                    value={location.Province}
                    onChange={handleChange}
                />
                <TextField 
                    className={classes.textField}
                    name="Country" 
                    variant="outlined" 
                    label="Country" 
                    fullWidth
                    value={location.Country}
                    onChange={handleChange}
                />
                <TextField 
                    className={classes.textField}
                    name="Zip" 
                    variant="outlined" 
                    label="Zip" 
                    fullWidth
                    value={location.Zip}
                    onChange={handleChange}
                />
                <div>
                    <FileBase 
                        label =""
                        type="file"
                        multiple={false}
                        onDone={({base64}) => setLocation({
                            ...location,
                            courtImage: base64
                        })}
                    />
                </div>
                <Button variant="contained" color="primary" size="large" type="submit" fullWidth>{updateLocationId ? 'Update' : 'Submit'} </Button>
                <Button variant="contained" color="secondary" size="small" onClick={clearForm} fullWidth> Clear </Button>
            </form>
        
    )
}

export default LocationForm;