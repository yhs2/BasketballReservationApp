import React , { useState, useEffect } from 'react';
import useStyles  from "./style";
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';

//In simple words, an absolute path refers to the same location in a file system 
//relative to the root directory, whereas a relative path points to a specific 
//location in a file system relative to the current directory you are working on.


// Destructure with in the round brackets
const Form = ({currentId,setCurrentId}) => {
    const post = useSelector((state) => currentId ? state.posts.posts.find((p) => p._id === currentId) : null);// return undefined if not find
    const user = JSON.parse(localStorage.getItem('profile'))
    const[postData,setPostData] = useState({
            title: '',
            message: '',
            tags: '',
            selectedFile: ''
    })

    useEffect(() => {
        if(post) setPostData(post);
    },[post])

   
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        // event.preventDefault();
        if(currentId){
            dispatch(updatePost(currentId, {...postData, name: user?.result?.name}))
            clear();
        }
        else{
            dispatch(createPost({...postData, name: user?.result?.name}));
            clear();
        }
    }

    if(!user?.result?.name){
        return (
        <Paper className={classes.paper} >
            <Typography vairant="h6" align="center">
                Please sign in
            </Typography>
        </Paper>
        )
    }

    const clear = () => {
        setCurrentId(0);
        setPostData({
            title: '',
            message: '',
            tags: '',
            selectedFile: ''
        })
    }

    const funcSetPostData = (event) => {
        const {name, value} = event.target;
        setPostData({
            ...postData,
            [name]: value
        })
    }
    return (
        <Paper className = {classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? "Update Memory" : "Create Memory" }</Typography>
                <TextField 
                    name="title" 
                    variant="outlined" 
                    label="Title" 
                    fullWidth
                    value={postData.title}
                    onChange={funcSetPostData}
                />
                <TextField 
                    name="message" 
                    variant="outlined" 
                    label="Message" 
                    fullWidth
                    value={postData.message}
                    onChange={funcSetPostData}
                />
                <TextField 
                    name="tags" 
                    variant="outlined" 
                    label="Tags" 
                    fullWidth
                    value={postData.tags}
                    onChange={funcSetPostData}
                />
                <div className={classes.fileInput}>
                    <FileBase 
                        type="file"
                        multiple={false}
                        onDone={({base64}) => setPostData({
                            ...postData,
                            selectedFile: base64
                        })}
                    />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth> Submit </Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth> Clear </Button>
            </form>
        </Paper>
    )
}

export default Form;