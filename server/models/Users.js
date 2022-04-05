const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    email:{
        type: String,
        required:true,
    },
    password:{
        type: String,
        required:true,
        max:1024
    },
    date:{
        type:Date,
        default: Date.now
    }
    
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
