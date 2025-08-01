import imagekit from "../configs/imageKit.js";
import Booking from "../models/Booking.js";
import Car from "../models/Car.js";
import User from "../models/User.js";
import fs from "fs";




//API change to owner to list their cars
export const changeRoleToOwner = async(req, res)=>{
    try {
        const {_id} = req.user;
        await User.findByIdAndUpdate(_id, {role: "owner"})
        res.json({success: true , message: "Now you can list cars"})
    } catch (error) {
        console.log(error.message);
        res.json({success: false , message: error.message})
        
    }
}

//API to list new car
export const addCar = async (req, res)=>{
    try {
        const {_id }= req.user;
        let car = JSON.parse(req.body.carData)
        const imageFile = req.file;

        //upload image to imagekit
        const fileBuffer = fs.readFileSync(imageFile.path)
        const response = await imagekit.upload({
            file: fileBuffer, 
            fileName: imageFile.originalname,
            folder: '/cars'
        })

        // optimazation through imagekit url tranform
        var optimizedImageUrl = imagekit.url({
            path : response.filePath,
            transformation : [
                {width: '1280'},    //resize width
                {quality: 'auto'},  //auto compress
                {format: 'webp'}    //convert to 
            ]
        });
        
        const image = optimizedImageUrl;
        await Car.create({...car, owner: _id, image})
        res.json({success: true , message: "Car Added Status : Pending!!! Approximately 24 hours needed!"})

    } catch (error) {
        console.log(error.message);
        res.json({success: false , message: error.message})
    }
}

//api to list owner cars
export const getOwnerCars = async(req, res)=>{
    try {
       const {_id} = req.user;
       const cars = await Car.find({owner: _id, status: 'confirmed'})
       res.json({success: true , cars}) 
    } catch (error) {
      console.log(error.message);
        res.json({success: false , message: error.message}) 
    }
}

//api to toggle car availability
export const toggleCarAvailability = async(req , res)=>{
     try {
       const {_id} = req.user;
       const {carId} = req.body;
       const car = await Car.findById(carId)

        //check if the car belongs to user
        if(car.owner.toString() !== _id.toString()){
            return res.json({success: false , message: "Unauthorized user"}) 
        }

        car.isAvailable = !car.isAvailable;
        await car.save()
       res.json({success: true , message : "Availability toggled"}) 
    } catch (error) {
      console.log(error.message);
        res.json({success: false , message: error.message}) 
    }
}


//api to delete a care
export const deleteCar = async(req , res)=>{
     try {
       const {_id} = req.user;
       const {carId} = req.body;
       const car = await Car.findById(carId)

        //check if the car belongs to user
        if(car.owner.toString() !== _id.toString()){
            return res.json({success: false , message: "Unauthorized user"}) 
        }

        car.owner = null;
        car.isAvailable = false;
        await car.save()
    
        res.json({success: true , message : "Car Removed"}) 
    } catch (error) {
      console.log(error.message);
        res.json({success: false , message: error.message}) 
    }
}


// api to get dashboard data
export const getDashboardData = async(req , res)=>{
     try {
        const {_id , role} = req.user;

        if(role!=='owner'){
           return res.json({success: false , message: "Unauthorized"})  
        }

        const cars = await Car.find({owner: _id, status: 'confirmed'})
        const bookings = await Booking.find({ owner: _id }).populate('car').sort({ createdAt: -1 });

        const pendingBookings = await Booking.find({owner: _id , status : "pending"})
        const completedBookings = await Booking.find({owner: _id , status : "confirmed"})

        //calculate monthly revenue for owner
        const monthlyRevenue = bookings.slice().filter(booking=> booking.status === 'confirmed').reduce((acc, booking)=> acc + booking.price, 0 ) 

        const dashboardData = {
            totalCars: cars.length, 
            totalBookings: bookings.length, 
            pendingBookings: pendingBookings.length,
            completedBookings: completedBookings.length,
            recentBookings: bookings.slice(0,3),
            monthlyRevenue
        }

        res.json({success:true , dashboardData})


    } catch (error) {
      console.log(error.message);
        res.json({success: false , message: error.message}) 
    }
}

//api to update user image
export const updateUserImage = async (req, res)=>{
    try {
        const {_id}= req.user

        const imageFile = req.file;

        //upload image to imagekit for profile
        const fileBuffer = fs.readFileSync(imageFile.path)
        const response = await imagekit.upload({
            file: fileBuffer, 
            fileName: imageFile.originalname,
            folder: '/users'
        })

        // optimazation through imagekit url transformateion
        var optimizedImageUrl = imagekit.url({
            path : response.filePath,
            transformation : [
                {width: '400'},    //resize width
                {quality: 'auto'},  //auto compress
                {format: 'webp'}    //convert to 
            ]
        });
        const image = optimizedImageUrl;
        await User.findByIdAndUpdate(_id,{image});
        res.json({success: true , message: 'image updated'})

    } catch (error) {
        console.log(error.message);
        res.json({success: false , message: error.message}) 
    }
}