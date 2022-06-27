var mongoose = require('mongoose')


var usersSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    age: Number,
    status: String,
    gender: String,
    dateInsert: Date,

})


var usersModel = mongoose.model('users', usersSchema)

module.exports = usersModel
