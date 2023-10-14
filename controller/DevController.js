const userModel = require('../database/models/user.module');
const starModel = require('../database/models/star.module');

const getAllUsers = async(req,res,next) => {
    const users = await userModel.find();
    res.json({
        status : 'success',
        data : users,
        message : 'All users',
    });
};

const getAllStars = async (req, res, next) => {
    const stars = await starModel.find();
    res.json({
        status : 'success',
        data : stars,
        message : 'All starts'
    })
};

const deleteAllUsers = async(req,res,next) => {
    const users = await userModel.deleteMany();
    res.json({
        status : 'success',
        data : users,
        message : 'All users deleted',
    })
}

const deleteAllStars = async(req,res,next) => {
    const stars = await starModel.deleteMany();
    res.json({
        status : 'success',
        data : stars,
        message : 'All stars Deleted'
    })
}

module.exports = {
    getAllUsers,
    getAllStars,
    deleteAllUsers,
    deleteAllStars
}