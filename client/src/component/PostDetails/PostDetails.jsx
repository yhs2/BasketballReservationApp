import React, { useEffect } from 'react'
import { Paper, Typography, CircularProgress, Divider, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment'
import { useParams, useHistory } from 'react-router-dom';
import { getPost, getPostsBySearch } from '../../actions/posts';
import useStyles from './style'
const PostDetails = () => {
    const { post, posts, isLoading } = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    const { id } = useParams();
    useEffect(() => {
        dispatch(getPost(id))
    }, [id]);

    useEffect(() => {
        dispatch(getPostsBySearch({ searchQuery: 'none', tags: post?.tags.join(',') }))
    }, [post]);

    if(!post){
        return null;
    }

    if(isLoading){
        return (<Paper elevation={3}><CircularProgress size="7em" /></Paper>);
    }
    const recommandedPost = posts.filter(({_id}) => _id !== post._id )
    const openPost = (_id) => {
        history.push(`/posts/${_id}`)
    }
    const openMain = () => {
        history.push('/')
    }
    return (
        <Paper className={classes.Paper} elevation={3} style={{ borderRadius: '15px', padding:'20px'}} >
            <div className={classes.card}>
                <div className={classes.section}>
                    <Typography variant="h3" component="h2">{post.title}</Typography>
                    <Typography gutterBottom variant="h6" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
                    <Typography gutterBottom variant="body1" component="p">{post.message}</Typography>
                    <Typography variant="h6">Created by: {post.name}</Typography>
                    <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
                    <Divider style={{ margin: '20px 0' }} />
                    <Typography variant="body1"><strong>Realtime Chat - coming soon!</strong></Typography>
                    <Divider style={{ margin: '20px 0' }} />
                    <Typography variant="body1"><strong>Comments - coming soon!</strong></Typography>
                    <Divider style={{ margin: '20px 0' }} />
                </div>
                <div className={classes.imageSection}>
                    <img className={classes.media} src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
                </div>
            </div>
            {recommandedPost.length && (
                <div className={classes.section}>
                    <Typography variant="h6" component="h6">Your might also like:</Typography>
                    <Divider style={{margin: '20px 0'}} />
                    <div className={classes.recommendedPosts}>
                        {recommandedPost.map(({title,message,name,likeCount,selectedFile,_id}) => (
                            <div className={classes.section} onClick={() => {openPost(_id)}} key={_id}>
                                <Typography variant="h5" component="h5">{title}</Typography>
                                <Typography gutterBottom variant="body1" component="p">{message}</Typography>
                                <Typography gutterBottom variant="h6">Created by: {name}</Typography>
                                <Typography gutterBottom variant="h6">liked by: {likeCount.length} people</Typography>
                                <div>
                                    <img src={selectedFile} style={{width: '10em', height: '10em'}} />
                                </div>
                            
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <div style={{textAlign: 'center'}}>
                <Button variant="contained" color="primary" onClick={openMain}>Back</Button>
            </div>
            
            
            
        </Paper>
        
        
    )
}

export default PostDetails