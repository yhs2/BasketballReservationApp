import PostMessage from "../models/postMessage.js";
import mongoose from 'mongoose';
export const getPosts = async (req,res) => {
    const { page } = req.query;
    try {
        const LIMIT = 8;
        const startIndex = (Number(page) - 1) * LIMIT;

        const total = await PostMessage.countDocuments({});
        const posts = await PostMessage.find({}).sort({_id: -1}).limit(LIMIT).skip(startIndex);
        // console.log(postMessages);
        res.status(200).json({data: posts, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT)}); 
    } catch (error) {
        res.status(404).json({message: error.message})
    }
    
}

export const getPost = async (req,res) => {
    const { id } = req.params;
    try {
        const post = await PostMessage.findById(id)
        console.log(post);
        res.status(200).json(post); 
    } catch (error) {
        res.status(404).json({message: error.message})
    }
    
}
//QUERY -> /posts?page=1 -> page = 1
//Params -> /posts/123 -> id = 123

export const getPostsBySearch = async (req,res) => {
    console.log(req.query);
    const { searchQuery, tags } = req.query
    
    try {
        // RegExp with flag 'i' means ignore cases
        const title = new RegExp(searchQuery, 'i');
        const posts = await PostMessage.find({$or: [ { title }, {tags: { $in: tags.split(',') }}]});
        console.log(posts);
        res.status(200).json({data: posts}); 
    } catch (error) {
        res.status(400).json({message: "what"})
    }
    
}


export const createPosts = async (req,res) => {
    
    const post = req.body;
    console.log(req.userId);
    const newPost = new PostMessage({...post, creator: req.userId, createdAt: new Date().toISOString()})
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

export const updatePost = async (req,res) => {
    
    const { id: _id } = req.params;
    const post = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("No post with dat ID");

    }
    
    // new: true to recieve the updated version of post from database
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id},{new: true} )
    
    
    
    res.json(updatedPost);
}

export const deletePost = async (req,res) => {
    const { id: _id } = req.params;
    const post = req.body;
    console.log(post);
    console.log(`${req.userId}`);
    // if(req.userId !== post.creator){
    //     return res.status(400).send("User has no authorization to delete this post")
    // }
    if(!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("No post with dat ID");

    }
    
    // new: true to recieve the updated version of post from database
    const updatedPost = await PostMessage.findByIdAndRemove(_id)
    
    
    
    res.json({message: "deleted"});
}


export const likePost = async (req,res) => {
    const { id: _id } = req.params;
    console.log(req.userId);
    if(!req.userId){
        return res.status(400).send("No authorized user")
    }

    if(!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("No post with dat ID");

    }
    // new: true to recieve the updated version of post from database
    const post = await PostMessage.findById(_id);

    // check if userId is already in like section
    const index = post.likeCount.findIndex((id) => id === String(req.userId));

    if(index === -1){
        post.likeCount.push(req.userId)
    }else{
        post.likeCount = post.likeCount.filter((id) => id !== String(req.userId))
    }
    const updatedPost = await PostMessage.findByIdAndUpdate(_id,post, {new: true})
    
    
    
    res.json(updatedPost);
}



