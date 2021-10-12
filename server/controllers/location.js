import Location from "../models/locations.js";
import mongoose from 'mongoose';
export const getLocations = async (req,res) => {
    try {

        const locations = await Location.find();
        res.status(200).json(locations); 
    } catch (error) {
        res.status(404).json({message: error.message})
    }
    
}


export const createLocations = async (req,res) => {
    
    const {location,maximumCapacity,notes,courtImage,addressType,addressLine,City,Province,Zip,Country} = req.body;
    
    const newLocation = new Location({
        location,
        maximumCapacity,
        notes,
        courtImage, 
        creator: req.userId, 
        dateCreated: new Date().toISOString(), 
        addressType,
        addressLine,
        City,
        Province,
        Country,
        Zip
        })
    try {
        await newLocation.save();
        res.status(201).json(newLocation);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

export const updateLocation = async (req,res) => {
    
    const { id: _id } = req.params;
    const post = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("No post with dat ID");

    }
    
    // new: true to recieve the updated version of post from database
    const updatedPost = await Location.findByIdAndUpdate(_id, {...post, _id},{new: true} )
    
    
    
    res.json(updatedPost);
}



export const deleteLocation = async (req,res) => {
    
    const { id: _id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("No post with dat ID");

    }
    
    // new: true to recieve the updated version of post from database
    const deletePost = await Location.findByIdAndRemove(_id)
    
    
    
    res.json("deleted");
}