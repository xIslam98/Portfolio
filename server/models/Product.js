const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    results:{
        type: Array,
        required:true,
    }
}); 
const UserModelProduct = mongoose.model('products', UserSchema);
module.exports = UserModelProduct;
