import express from 'express';
import {signIn,signUp} from '../controllers/users.js'
const router = express.Router();


router.post('/signIn', signIn);
router.post('/signUp', signUp);
// router.get('/', (req,res) => {
//     res.send('this workds');
// })

export default router;