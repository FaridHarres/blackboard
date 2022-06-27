var mongoose = require('mongoose')


var option = {
    connectTimeoutMS: 5000,
    useUnifiedTopology: true,
    useNewUrlParser: true,

}

mongoose.connect('mongodb+srv://blackboard:KRsEro8HYOIzopFX@cluster.dq2na.mongodb.net/blackboard',)

