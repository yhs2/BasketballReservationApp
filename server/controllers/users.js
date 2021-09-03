import UserMessage from "../models/user.js";
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
export const signIn = async (req,res) => {
    const {email, password} = req.body;
    try {
        const existUser = await UserMessage.findOne({email: email});
        if(!existUser){
            return res.status(404).json({message: "no user existed"})
        }

        const correctPassword = await bcrypt.compare(password,existUser.password);
        if(!correctPassword){
            return res.status(400).json({message: "Invalid credentials"})
        }
        {/* create a token with structure:
            HEADER{
                "alg": "HS245"
                "type": "JWT"
            }
            PAYLOAD:{
                "sub": "12345670"
                "name": "john Doe",
                "admin": true
            }
            veryfy signiture{
                ...
            }
        xxxx.yyyy.zzzz
        
        
        */}
        const token = jwt.sign({ email: existUser.email, id: existUser._id}, 'test', {expiresIn: "1h"})
        res.status(200).json({result: existUser, token})
    } catch (error) {
        res.status(500).json({message: "Something went wrong"})
    }
    
}

export const signUp = async (req,res) => {
    const {email, password, firstName, lastName, confirmPassword} = req.body;
    try {
        const existUser = await UserMessage.findOne({email: email});
        if(existUser){
            return res.status(400).json({message: "Already exist"});
        }
        if(password != confirmPassword){
            return res.status(400).json({message: "Password dont match"});
        }

        const hashedPassword = await bcrypt.hash(password,12);
        const result = await UserMessage.create({
            email: email,
            password: hashedPassword,
            name: `${firstName}, ${lastName}`
        });

        const token = jwt.sign({ email: result.email, id: result._id}, 'test', {expiresIn: "1h"})

        return res.status(200).json({result, token})
        
    } catch (error) {
        res.status(500).json({message: "Something went wrong"})
    }
    
}

