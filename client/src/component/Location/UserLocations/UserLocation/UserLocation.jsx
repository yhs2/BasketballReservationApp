import React from 'react'
import { Box, Card, CardContent, CardMedia,Typography  } from '@material-ui/core'
import useStyles from './style'
import bball from '/memoryMERN/client/src/image/bball.jpg'
const UserLocation = () => {
    const classes = useStyles();

    return (
        <Card className={classes.CardContent}>
            <Box>
                <CardMedia 
                    className = {classes.contentMedia}
                    component="img"
                    image={bball}
                    alt="Live from space album cover"
                />
            </Box>
            <Box>
                <CardContent className ={classes.contentBox}>
                    <Typography component ="div" variant = "h5">
                        Location name
                    </Typography>
                    <Typography component ="div" variant = "subtitle1" >
                        Location address
                        <Typography style={{position : 'inline-block', marginLeft : "1rem"}} color = 'primary' variant = "subtitle2" component ="span">
                            Maximum Capacity = ???
                        </Typography>
                    </Typography>
                </CardContent>
            </Box>
            
        </Card>
    )
}

export default UserLocation;