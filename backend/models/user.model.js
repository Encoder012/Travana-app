const { Schema, model } = require('mongoose')
const jwt = require('jsonwebtoken');
require('dotenv').config()

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET


const userSchema = new Schema({
    wallet: {
        type: String,
        required: [true, "wallet address is required"],
        unique: [true, "wallet address should be unique"]
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    rides_completed: {
        type: Number,
        default: 0
    },
    points: {
        type: Number,
        default: 0
    },
    reputation: {
        type: Number,
        default: 5.0
    },
    nfts: [{
        type: String
    }]
})


userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            wallet: this.wallet
        },
        ACCESS_TOKEN_SECRET,
        {
            expiresIn: '1d'
        }
    )
}


userSchema.statics.verifyAccessToken = function (token) {
    try {
        return jwt.verify(token, ACCESS_TOKEN_SECRET)
    } catch {
        return null;
    }
}




module.exports = model('User', userSchema)