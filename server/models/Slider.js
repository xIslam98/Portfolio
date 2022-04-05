const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    img:{
        type: String,
        required:true,
    },
    title:{
        type: String,
        required:true,
    },
    description:{
        type: String,
        required:true,
    }
}); 
const UserModelSlider = mongoose.model('sliderdb2', UserSchema);
module.exports = UserModelSlider;
