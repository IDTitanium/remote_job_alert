const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const socialSchema = new Schema({
    facbook: {
        
    id: {
        type: Number
    },
    token: {
        type: String
    },
    name: {
        type: String
    },
    email: {
        type: String
    },

}
    
});

module.exports = mongoose.model('Social', socialSchema);