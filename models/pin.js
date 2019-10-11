const mongoose = require('mongoose')

let Schema = mongoose.Schema

let pinSchema = new Schema({
    name: {type:String},
    location: {type:String},
    user: {type: Schema.Types.ObjectId, ref: "users"}
}, {timestamps:true})

let Pin = mongoose.model('Pin',pinSchema)

module.exports = Pin