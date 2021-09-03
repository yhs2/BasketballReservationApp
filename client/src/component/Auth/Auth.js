import React, {useState} from 'react';
import { Avatar, Typography, Button, Paper, Grid, Container, TextField } from '@material-ui/core';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import useStyle from "./style" 
import LockIcon from '@material-ui/icons/Lock';
import Input from '../Input/Input';
import { GoogleLogin } from "react-google-login"
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { signUp, signIn } from '../../actions/auth';


const Auth = () => {
    const dispatch = useDispatch();
    const classes = useStyle();
    const history = useHistory();
    const [showPassword,setShowPassword] = useState(false);
    const [isSignup,setIsSignup] = useState(false);
    const [signUpForm,setSignUpForm] = useState({
        firstName : '',
        lastName : '',
        email : '',
        password : '',
        confirmPassword : ''
    })
    
    const handleSubmit= (event) => {
        event.preventDefault();
        if(isSignup){
            dispatch(signUp(signUpForm,history))
        }
        else{
            dispatch(signIn(signUpForm,history))
        }
        
        
    }


    const handleChange= (event) => {
        const { name, value } = event.target;
        setSignUpForm(
            
                {
                    ...signUpForm,
                    [name] : value
                }
            
        )
        
    }

    const handleShowPassword = () => {
        setShowPassword((prev)=> {
            return !prev
        });
    }

    const switchMode = () => {
        setIsSignup((prev) => {
            return !prev
        })
        setShowPassword(false);
    }

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            dispatch({type: "AUTH", data: {result, token}})
            history.push('/');
        } catch (error) {
            console.log(error);
        }
        console.log(result);
    }
    const googleFailure = () => {
        console.log("google fail");
    }

    return(
        <Container component="main" maxWidth="xs">
            <Paper className= {classes.paper} elevation={2}>
                <Avatar className={`${classes.avatar} ${classes.orange}`}>
                    <LockIcon />
                </Avatar>
                <Typography variant="h5">
                    {isSignup ? 'Sign up' : 'Sign in'}
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                            <>
                                <Input autoFocus half  name="firstName" label="First Name" handleChange={handleChange} value={signUpForm.firstName} />
                                <Input autoFocus half  name="lastName" label="Last Name" handleChange={handleChange} value={signUpForm.lastName}/>
                            </>
                            )
                        }
                        <Input autoFocus  name="email" label="Email Address" handleChange={handleChange} type="email" value={signUpForm.email}/>
                        <Input autoFocus  name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} value={signUpForm.password}/>
                        {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" value={signUpForm.confirmPassword}/>}
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignup ? 'Sign up' : 'Sign in'}
                    </Button>

                    <GoogleLogin
                    
                        clientId="657141517491-h5p7vufhbten9f0s0dbcootadn24g3e4.apps.googleusercontent.com"
                        render={(renderProps) => {
                            return(
                            <Button
                                className={classes.googleButton} 
                                color='primary' fullWidth 
                                onClick={renderProps.onClick} 
                                disabled={renderProps.disabled} 
                                startIcon={<LockOpenIcon/>} 
                                variant="contained">
                                    Google Sign In
                            </Button>)
                        }}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />
                    <Grid container alignContent="flex-end" justifyContent="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignup ? "Switch to sign in" : "Switch to sign up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth;