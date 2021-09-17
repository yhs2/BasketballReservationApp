import mongoose from 'mongoose'
import address from './address.js';


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
    notes : String,
    address : {
        type : address,
        default : {}
    },
    courtImage : String
})

const location = mongoose.model('location',locationSchema);
export default location;