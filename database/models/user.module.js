const { model } = require('mongoose');
const userSchema = require('../schemas/user.schema');

const userModel = model('user', userSchema);

module.exports = userModel;