const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PaymentSchema = new Schema({
    Id : {
        type : String,
        required: false
    },
    Name: {
        type: String,
        required: true
    },
    PhoneNumber : {
        type : String,
        required: true
    },
    CardNumber: {
        type : String,
        required: true
    },
    CVV : {
        type : String,
        required: true
    },
    ExpiaryDate : {
        type : String,
        required: true
    },
    TotlePrice : {
        type : Number,
        required: true
    }
})

//salary table and path
const Payment = mongoose.model("payment",PaymentSchema);
module.exports = Payment;