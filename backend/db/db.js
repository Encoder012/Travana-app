const mongoose = require('mongoose');
const { DB_NAME } = require('../constants')
require('dotenv').config()

const connectDB = async () => {
    try {
        const uri = `${process.env.MONGO_URI}/${DB_NAME}?retryWrites=true&w=majority&appName=Travana`;
        console.log(uri)
        const db = await mongoose.connect(uri);
        console.log(`DB Connected: name: ${DB_NAME}`)
    } catch (error) {
        console.log("MONGODB ERROR: connection error", error)
        process.exit(1)
    }
};

module.exports = connectDB;