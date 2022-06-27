var mongoose = require('mongoose')


var ordersSchema = mongoose.Schema({
    articles: [{ type: mongoose.Schema.Types.ObjectId, ref: "articles"}],
    total: Number,
    shipping_cost: Number,
    date_insert: Date,
    status_payment: String,
    date_payment: String,
    status_shipment: Boolean,
    date_shipment: Date,
    delivery_address: String,
    delivery_city: String,
    delivery_zipcode: Number

 
})


var ordersModel = mongoose.model('orders', ordersSchema)

module.exports = ordersModel
