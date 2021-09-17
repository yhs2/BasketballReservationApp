import mongoose from 'mongoose'

const addressSchema = mongoose.Schema({
    
    addressType : { type : String },
    addressLine : { type : String },
    City : { type : String },
    Province : { type : String },
    Country : { type : String },
    Zip : { type : String },
    
})

// const address = mongoose.model('address',addressSchema);
export default addressSchema;