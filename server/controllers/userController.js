import User from "../models/User.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import Car from "../models/Car.js";

//generate jwt token
const generateToken =(userId)=>{
    const payload = userId;
    return jwt.sign(payload, process.env.JWT_SECRET)
}
//register user
export const registerUser = async (req, res)=>{
    try {
        const {name , email , password} = req.body

        // Validate name
        if (!name || name.trim() === "") {
            return res.json({ success: false, message: 'Name is required' });
        }

        // Validate email
        if (!email || email.trim() === "") {
            return res.json({ success: false, message: 'Email is required' });
        }

        // Validate password
        if (!password) {
            return res.json({ success: false, message: 'Password is required' });
        }

        if (password.length < 8) {
            return res.json({ success: false, message: 'Password must be at least 8 characters long' });
        }

        const userExists = await User.findOne({email})
        if(userExists){ 
            return res.json({success: false , message:'User already exists , try a different email'})}


        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({name, email, password: hashedPassword})

        const token = generateToken(user._id.toString())
        res.json({success: true, token})

    } catch (error) {
        console.log(error.message);     
        return res.json({success: false , message: error.message})   
    }
}

//user login
export const loginUser = async (req, res)=>{
    try {
        const {email, password} = req.body
        const user = await User.findOne({email})
        if(!user){
            return res.json({success: false , message: "User not found"})
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.json({success: false , message: "Invalid password"})
        }
        const token = generateToken(user._id.toString())
        res.json({success: true, token})
    } catch (error) {
        console.log(error.message);     
        return res.json({success: false , message: error.message}) 
    }
}


//get user data using jwt token
export const getUserData = async (req, res) =>{
    try {
        const {user} = req;
        res.json({success:true , user})
    } catch (error) {
        console.log(error.message);     
        return res.json({success: false , message: error.message}) 
    }
}

//get all cars for the frontend
export const getCars = async (req, res) =>{
    try {
        const cars = await Car.find({isAvailable:true, status: 'confirmed'})
        return res.json({success: true , cars}) 
    } catch (error) {
        console.log(error.message);     
        return res.json({success: false , message: error.message}) 
    }
}