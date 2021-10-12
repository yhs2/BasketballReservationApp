import React from 'react'
import { Box, Card, CardContent, CardMedia,Typography,Button  } from '@material-ui/core'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import useStyles from './style'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ADMIN, SETLOCATION, DELETELOCATION } from '../../../../constants/actionType'
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import { fetchLocation, deleteLocation } from '../../../../actions/location';

const UserLocation = ({post}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const admin = localStorage.getItem('profile')['email'];
    console.log(admin);
    const handleUpdateClick = () => {
        dispatch({ type: SETLOCATION, payload: post._id })
    }

    const handleDelete = () => {
        dispatch(deleteLocation(post._id))
    }
    return (
        <Card className={classes.CardContent}>
            <Box>
                <CardMedia 
                    className = {classes.contentMedia}
                    component="img"
                    image={post.courtImage}
                    alt="Live from space album cover"
                />
            </Box>
            <Box>
                <CardContent className ={classes.contentBox}>
                    <Typography component ="div" variant = "h5">
                        {post.location}
                    </Typography>
                    <Typography component ="div" variant = "subtitle1" >
                        MaximumCapacity : {post.maximumCapacity}
                    </Typography>
                    <Typography style={{position : 'inline-block', marginLeft : "1rem"}} color = 'primary' variant = "subtitle2" component ="span">
                        {post.addressLine}
                        <Typography style={{position : 'inline-block', marginLeft : "1rem"}} color = 'primary' variant = "subtitle2" component ="span">
                            {post.City}
                        </Typography>
                        <Typography style={{position : 'inline-block', marginLeft : "1rem"}} color = 'primary' variant = "subtitle2" component ="span">
                            {post.Province}
                        </Typography>
                        <Typography style={{position : 'inline-block', marginLeft : "1rem"}} color = 'primary' variant = "subtitle2" component ="span">
                            {post.Country}
                        </Typography>
                    </Typography>   
                    
                    <div className={classes.overlay2} onClick={handleUpdateClick}>
                        <Button size="small" >
                            <MoreHorizIcon fontSize="medium" />
                        </Button>
                    </div>
                    <div className={classes.overlay3} onClick={handleDelete}>
                        <Button size="small" >
                            <DeleteSweepIcon fontSize="medium" />
                        </Button>
                    </div>
                </CardContent>
            </Box>
            
        </Card>
    )
}

export default UserLocation;