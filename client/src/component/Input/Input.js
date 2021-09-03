import React from 'react';
import { Avatar, Typography, Button, Paper, Grid, Container, TextField, InputAdornment, IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import useStyle from "./style" 
import LockIcon from '@material-ui/icons/Lock';


const Input = ({name , half, handleChange, label, type, handleShowPassword,autoFocus,value}) => {
    return (
        <Grid item xs={12} sm={half ? 6 : 12} >
            <TextField 
                name={name}
                onChange={handleChange}
                variant= "outlined"
                required
                fullWidth
                label = {label}
                autoFocus={autoFocus}
                type={type}
                InputProps = {
                    name === "password" && {
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={handleShowPassword}>
                                    {/* type would be password if handleshowpassword return the truthy value */}
                                    {type === "password" ? <Visibility /> : <VisibilityOff /> }
                                </IconButton>
                            </InputAdornment>
                        )
                    }
                }
                value = {value}
            />
        </Grid>
    )
}

export default Input;