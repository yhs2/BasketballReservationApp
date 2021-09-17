import React from 'react'
import { Box, Card, CardContent, CardMedia,Typography  } from '@material-ui/core'
import useStyles from './style'
import { useState } from 'react'
const UserLocation = ({post}) => {
    const classes = useStyles();

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
                </CardContent>
            </Box>
            
        </Card>
    )
}

export default UserLocation;