import mongoose, { model, mongo } from "mongoose";

const {ObjectId} = mongoose.Schema.Types

const carSchema = new mongoose.Schema({
    owner: {type: ObjectId, ref: 'User'},
    brand: {type: String, required: true},
    model: {type: String, required: true},
    image: {type: String, required: true},
    year: {type: Number, required: true},
    category: {type: String, required: true},
    fuel_type: {type: String, required: true},
    race_wins: {type: Number, required: true},
    weight: {type: Number, required: true},
    horsepower: {type: Number, required: true},
    engine_type: {type: String, required: true},
    pricePerDay: {type: Number, required: true},
    location: {type: String, required: true},
    driver: { type: String, required: true },
    description: {type: String, required: true},
    features: { type: String, required: true }, 
    isAvailable: {type: Boolean, default: true},
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'rejected'],
        default: 'pending'
    }
    
},{timestamps: true})

const Car = mongoose.model('Car', carSchema)

export default Car