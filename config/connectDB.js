const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// MongoDB connection string
const mongoURI = process.env.MONGODB_URI;

// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

module.exports = connectDB;