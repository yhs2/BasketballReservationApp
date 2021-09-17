import express from 'express';
import {createLocations, getLocations} from '../controllers/location.js';
import auth from '../middleware/auth.js';
const router = express.Router();



router.post('/',createLocations);
router.get('/',getLocations);
// Upon any router bellow initiate, we first check on the auth middleware for the authorization check
// then if it identifies the identity, we continue to the application middleware(the controller)


// router.get('/', (req,res) => {
//     res.send('this workds');
// })

export default router;