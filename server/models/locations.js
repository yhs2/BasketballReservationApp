import mongoose, { mongo } from 'mongoose'

const locationSchema = mongoose.Schema({
    location : String,
    maximumCapacity : Number,
    participants : {
        type : [String],
        default : []
    },
    dateCreated : {
        type : Date,
        default : new Date()
    },
    note : String,
    address : String,
    courtImage : string
})

const location = mongoose.model('location',locationSchema);
export default location;