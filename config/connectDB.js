const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL, {
           
        });
        console.log('Database connected');
    } catch (error) {
        console.error('Error connecting to database:', error.message);
    }
};

module.exports = connectDB;
