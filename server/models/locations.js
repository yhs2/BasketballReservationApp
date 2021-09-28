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
    addressType : String,
    addressLine : String,
    City : String ,
    Province : String ,
    Country : String ,
    Zip : String,
    courtImage : String,
    creator: String
})

const location = mongoose.model('location',locationSchema);
export default location;