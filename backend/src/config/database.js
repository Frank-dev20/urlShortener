const mongoose = require('mongoose');
const config = require('./environment');

const connectDB = async () => {
    try {
        await mongoose.connect(config.mongoUri);
        console.log(`MongoDB Connected: ${mongoose.connection.host}`);

        mongoose.connection.on('error', (err) =>{
            console.error('MongoDB connection error:', err);
        });
        mongoose.connection.on('disconnected', ()=>{
            console.log('MongoDB disconnected');
        });

    }catch(error){
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;