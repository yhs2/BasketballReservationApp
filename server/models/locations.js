import mongoose from 'mongoose'

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
        addressType : { type : String },
        addressLine : { type : String },
        City : { type : String },
        Province : { type : String },
        Country : { type : String },
        Zip : { type : String },
    },
    courtImage : String
})

const location = mongoose.model('location',locationSchema);
export default location;