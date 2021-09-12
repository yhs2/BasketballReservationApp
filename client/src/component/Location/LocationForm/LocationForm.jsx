import React , { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyles  from "./style";
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux';
import { postLocation } from '../../../actions/location';

const LocationForm = () => {
    const dispatch = useDispatch()
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

    const handleChange = (event) => {
        const { name, value} = event.target;
        setLocation({
            ...location,
            [name] : value
        })
        console.log(location);
    }

    const handleLocationSubmit = (event) => {
        event.preventDefault();
        dispatch(postLocation({...location}))
    }
    return (
        <Paper>
            <form autoComplete="off" noValidate onSubmit={handleLocationSubmit}>
                <Typography variant="h6"> Submit location </Typography>
                <TextField 
                    name="location" 
                    variant="outlined" 
                    label="Title" 
                    fullWidth
                    value={location.location}
                    onChange={handleChange}
                />
                <TextField 
                    name="maximumCapacity" 
                    variant="outlined" 
                    label="maximumCapacity" 
                    fullWidth
                    value={location.maximumCapacity}
                    onChange={handleChange}
                />
                <TextField 
                    name="notes" 
                    variant="outlined" 
                    label="notes" 
                    fullWidth
                    value={location.notes}
                    onChange={handleChange}
                />
                <TextField 
                    name="addressType" 
                    variant="outlined" 
                    label="addressType" 
                    fullWidth
                    value={location.addressType}
                    onChange={handleChange}
                />
                <TextField 
                    name="addressLine" 
                    variant="outlined" 
                    label="addressLine" 
                    fullWidth
                    value={location.addressLine}
                    onChange={handleChange}
                />
                <TextField 
                    name="City" 
                    variant="outlined" 
                    label="City" 
                    fullWidth
                    value={location.City}
                    onChange={handleChange}
                />
                <TextField 
                    name="Province" 
                    variant="outlined" 
                    label="Province" 
                    fullWidth
                    value={location.Province}
                    onChange={handleChange}
                />
                <TextField 
                    name="Country" 
                    variant="outlined" 
                    label="Country" 
                    fullWidth
                    value={location.Country}
                    onChange={handleChange}
                />
                <TextField 
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
                <Button variant="contained" color="primary" size="large" type="submit" fullWidth> Submit </Button>
                <Button variant="contained" color="secondary" size="small" onClick={()=>{}} fullWidth> Clear </Button>
            </form>
        </Paper>
    )
}

export default LocationForm;