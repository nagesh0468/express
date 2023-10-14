const { Schema } = require('mongoose');

const userSchema = new Schema({
    name : {
        type : String,
        require : true,
        min : 3,
        max : 88,
    },
    email : {
        type : String,
        require : true,
    },
    password : {
        type : String,
        require : true,
        min : 6,
        select : false,
    },
    token : {
        type : String,
    }
});


module.exports = userSchema;