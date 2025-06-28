const User = require('../models/user.model')
const asyncHandler = require('../utils/asyncHandler')

const getUser = asyncHandler(
    async (req, res) => {
        const user = await User.findOne({ wallet: req.params.wallet });
        if (!user) return res.status(400).json({
            error: 'User not found'
        });
        res.json(user);
    })

const updateUser = asyncHandler(
    async (req, res) => {
        const { rides_completed, points, reputation, nft } = req.body;
        const user = await User.findOne({ wallet: req.params.wallet });
        if (!user) return res.status(404).json({ error: 'User not found' });

        if (rides_completed !== undefined) user.rides_completed += rides_completed;
        if (points !== undefined) user.points += points;
        if (reputation !== undefined) user.reputation = reputation;
        if (nft) user.nfts.push(nft);

        await user.save();
        res.json(user);
    }
)

module.exports = {
    getUser,
    updateUser
}