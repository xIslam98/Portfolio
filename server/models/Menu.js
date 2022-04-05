const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    menu:{
        type: String,
        required:true,
    },
    url:{
        type: String,
        required:true,
    },
    cart:{
        type: String,
        required:false,
    },
    link:{
        type: String,
        required:false
    }
}); 
const UserModelMenu = mongoose.model('menus', UserSchema);
module.exports = UserModelMenu;
