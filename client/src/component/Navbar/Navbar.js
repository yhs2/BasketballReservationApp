import React, {useState, useEffect} from 'react';
import {  AppBar, Typography, Toolbar, Avatar, Button} from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useStyles from './style';
import infinity from '../../image/infinity.jpg'
import { useDispatch } from "react-redux";
import { LOGOUT } from '../../constants/actionType';
import decode from 'jwt-decode'


const Navbar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const [user,setUser] = useState(JSON.parse(localStorage.getItem("profile")));
    useEffect(() => {
        const token = user?.token;
        if(token){
            const decodedToken = decode(token);
            if(decodedToken.exp & 1000 < new Date().getTime()){
                handleLogout();
            }
        }
        setUser(JSON.parse(localStorage.getItem("profile")))
    },[location])

    const handleLogout = () => {
        dispatch({
            type: LOGOUT
        });
        history.push('/');
        setUser(null);
    }
    return(
        <AppBar className={classes.appBar}  position="static" color="inherit">
            <div className={classes.brandContainer}>
                {/* component props turns desinated typography compoenent into a desired compoenent
                    Now the typography is <Link>....</Link>  with varient(the font size) of h2*/}
                <Typography component={Link} to="/" className={classes.heading}  varient ="h2" align="center">
                    Memories
                </Typography>
                <img className={classes.image} src={infinity} alt="Image" height="400"/>
            </div>
            <Toolbar>
                {user ? 
                (
                <div className ={classes.toolbar}>
                    <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}> {user.result.name.charAt(0)} </Avatar>
                    <Typography className={classes.userName} varient="h6"> {user.result.name} </Typography>
                    <Button variant="contained" color="secondary" onClick={handleLogout}>Sign out</Button> 
                </div>
                ) : (
                    <Button component= { Link } to="/auth" variant="contained" color="primary">Sign in</Button>   
                )}

                
            </Toolbar>
            
            
        </AppBar>
    )
} 

export default Navbar