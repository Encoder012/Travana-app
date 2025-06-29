const mongoose = require('mongoose');
const DriverSchema = new mongoose.Schema({
    wallet: String,
    available: Boolean,
    currentZone: String,
    carType: String,
    rating: Number,
    location: {
        lat: Number,
        lng: Number
    }
});
module.exports = mongoose.model('Driver', DriverSchema);