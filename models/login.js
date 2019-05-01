const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const socialSchema = new Schema({
   facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
}
    
});

module.exports = mongoose.model('Social', socialSchema);