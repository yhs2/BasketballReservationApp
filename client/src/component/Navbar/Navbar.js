import React, {useState, useEffect} from 'react';
import {  AppBar, Typography, Toolbar, Avatar, Button, IconButton, List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useStyles from './style';
import infinity from '../../image/infinity.jpg'
import { useDispatch } from "react-redux";
import { LOGOUT } from '../../constants/actionType';
import decode from 'jwt-decode'
import MenuIcon from '@material-ui/icons/Menu';
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';
const Navbar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const [user,setUser] = useState(JSON.parse(localStorage.getItem("profile")));
    const [open, setOpen] = useState(false);
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

    const handleLeftNav = () => {
        setOpen((prev) => !prev)
    }
    return(
        // app bar gives styling such as color and shape, tool bar gives structure
        <AppBar className={classes.appBar}  position="static" color="inherit">
             
            <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleLeftNav}>
                < MenuIcon />
             </IconButton>
            {open && 
            (
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            )}
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