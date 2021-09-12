import location from "../models/locations.js";
import mongoose from 'mongoose';
export const getLocations = async (req,res) => {
    try {

        const locations = await PostMessage.find();
        // console.log(postMessages);
        res.status(200).json(locations); 
    } catch (error) {
        res.status(404).json({message: error.message})
    }
    
}

export const createLocations = async (req,res) => {
    
    const {location,maximumCapacity,notes,courtImage,addressType,addressLine,City,Province,Zip,Country} = req.body;
    console.log(location);
    const newLocation = new location({location,maximumCapacity,notes,courtImage, creator: req.userId, dateCreated: new Date().toISOString()})
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}