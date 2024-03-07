const mongoose = require('mongoose');

const CreditCardSchema = new mongoose.Schema({

    cardholderName: {
        type: String,
        required: true
    },
    expirationDate: {
        type: String,
        required: true
    },
    cardNumber: {
        type: String,
        required: true
    },

    cvv: {
        type: String,
        required: true
    }

})
// Create the model from the schema

module.exports = mongoose.model('CreditCard', CreditCardSchema);
