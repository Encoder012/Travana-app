const User = require('../models/user.model');
const asyncHandler = require('../utils/asyncHandler');
const ApiError = require('../utils/apiError')
const login = asyncHandler(
    async (req, res) => {
        console.log(req.body)
        const { wallet } = req.body;
        if (!wallet) {
            throw new ApiError(400, "Wallet address is required")
        }

        let user = await User.findOne({ wallet });
        if (!user) {
            user = await new User({ wallet }).save();
        }
        const accessToken = user.generateAccessToken();
        res.json({ accessToken })
    }
)
module.exports = { login };