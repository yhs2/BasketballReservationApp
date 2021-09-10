import express from 'express';
import {getPostsBySearch, getPost, getPosts, createPosts, updatePost, deletePost, likePost} from '../controllers/posts.js';
import auth from '../middleware/auth.js';

const router = express.Router();


router.get('/search', getPostsBySearch)
router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/', auth, createPosts);
// Upon any router bellow initiate, we first check on the auth middleware for the authorization check
// then if it identifies the identity, we continue to the application middleware(the controller)
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth,  likePost);

// router.get('/', (req,res) => {
//     res.send('this workds');
// })

export default router;