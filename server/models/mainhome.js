const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    surname:{
        type: String,
        required:true,
    },
    work:{
        type: String,
        required:true,
    },
    subdescription:{
        type: String,
        required:true,
    },
    image:{
        type: String,
        required:true,
    }
}); 
const UserModelMain = mongoose.model('mains', UserSchema);
module.exports = UserModelMain;
