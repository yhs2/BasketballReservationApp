import React, {useState, useEffect} from 'react';
import {  AppBar, Typography, Toolbar, Avatar, Button, IconButton, List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useStyles from './style';
import { useDispatch } from "react-redux";
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import PeopleIcon from '@material-ui/icons/People';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { CLOSE } from '../../constants/actionType';

const Leftnav = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    // useEffect(() => {
    //     dispatch({
    //         type: CLOSE
    //     })
    // }, [history])
    return(
        <List>
            <ListItem component={Link} to="/" key="Available games">
                <ListItemIcon><SportsBasketballIcon /></ListItemIcon>
                <ListItemText primary="Available games" />
            </ListItem>
            <ListItem component={Link} to="/locations" key="Locations">
                <ListItemIcon><LocationOnIcon /></ListItemIcon>
                <ListItemText primary="Locations" />
            </ListItem>
            <ListItem component={Link} to="/players" key="Players">
                <ListItemIcon><PeopleIcon /></ListItemIcon>
                <ListItemText primary="Players" />
            </ListItem>
                
        </List>
    )
}

export default Leftnav;