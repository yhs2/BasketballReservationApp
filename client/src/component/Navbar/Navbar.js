import React, {useState, useEffect} from 'react';
import {  AppBar, Typography, Toolbar, Avatar, Button, IconButton, List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useStyles from './style';
import infinity from '../../image/infinity.jpg'
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT,OPEN, CLOSE } from '../../constants/actionType';
import decode from 'jwt-decode'
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
const Navbar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const [user,setUser] = useState(JSON.parse(localStorage.getItem("profile")));
    const [open, setOpen] = useState(false);
    const openLeft = useSelector((state) => state.posts.isOpen);
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
        setUser(null);
        history.push('/');
    }

    const handleLeftNav = () => {
        setOpen((prev) => !prev)
        { open ? 
            dispatch({ type: OPEN }) : 
            (
                dispatch({ type: CLOSE })
            )
        }
        
    }
    return(
        // app bar gives styling such as color and shape, tool bar gives structure
        <AppBar  position="static" color="inherit" className={clsx(classes.appBar, {[classes.shrink] : openLeft})}>
             
            <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleLeftNav}>
                < MenuIcon />
             </IconButton>
            <div className={classes.brandContainer}>
                {/* component props turns desinated typography compoenent into a desired compoenent
                    Now the typography is <Link>....</Link>  with varient(the font size) of h2*/}
                <Typography component={Link} to="/" className={classes.heading}  varient ="h2" align="center">
                    Basketball reserves
                </Typography>
                <img className={classes.image} src={infinity} alt="Image" height="400"/>
            </div>
            <Toolbar>
                {user != null ? 
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