const mongoose = require('mongoose');

const Schema = mongoose.Schema

const purchaseSchema = new Schema({
    invoiceid: {type: Number, required: true},
    desc: {type: String},
    qty: {type: Number},
    rate: {type: Number, required: true}
}, {timestamps: true})

module.exports = mongoose.model('purchase', purchaseSchema);