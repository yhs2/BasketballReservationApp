import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress} from '@material-ui/core';
import UserLocation from "./UserLocation/UserLocation"

const Locations = ({setCurrentId}) => {
    const { locations, isLoading } = useSelector((state) => state.locations);
    return (
    <Grid container style={{marginLeft : 240}}>
        <div>
            hey
        </div>
    </Grid>)
    // if(!posts.length && !isLoading) return 'No posts'
    
    // return (
    //     // isLoading ? <CircularProgress /> : (
    //     //     // <Grid className={classes.container} container alignItems="stretch" spacing = {3}>
    //     //     //     {posts.map((post)=>(
    //     //     //         <Grid key={post._id} item xs={12} sm={12} md={6} lg={3}>
    //     //     //             <UserLocation post={post} setCurrentId={setCurrentId}/>
    //     //     //         </Grid>
                    
    //     //     //     ))}
                
    //     //     // </Grid>
    //     // )
    // )
}

export default Locations;