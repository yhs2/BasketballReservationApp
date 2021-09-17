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