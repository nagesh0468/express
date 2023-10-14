const { model } = require('mongoose');
const starSchema = require('../schemas/star.schema');

const starModel = model('star', starSchema);

module.exports = starModel;