import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose' 
import cors from 'cors'
import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'
import locationRoutes from './routes/location.js'
import dotenv from 'dotenv'
const app = express();

dotenv.config();
// app.use(bodyParser.json({limit: "30mb", extended: true}));
// app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(express.json({ limit: '25mb', extended: true }));
app.use(express.urlencoded({ limit: '25mb', extended: true }));
app.use(cors());


app.use('/posts',postRoutes);
app.use('/user',userRoutes);
app.use('/location',locationRoutes)
app.get('/', (req,res) => {
    res.send('Hellow to Memories API');
});

const PORT = process.env.PORT;
mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(() => app.listen(PORT, () => console.log(`server running on port : ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify',false);