import mongoose from  'mongoose';
const userSchema = mongoose.Schema({
    name: { type: String, requried: true},
    email: { type: String, requried: true},
    password: { type: String, requried: true},
    id : {type : String}
    
});

const PostMessage = mongoose.model('User', userSchema);

export default PostMessage;