const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    firstName:{type:String, required:true},
    lastName:{type:String, required:true},
    address:{type:String, trim:true},
    phone:{type:Number, required:true, unique:true},
    title:{type:String, enum:['Mr', "Mrs", "Ms"]},
    email:{type:String, required:true,  unique:true},
    password:{type:String, required:true}

} , {timestamps:true})

module.exports = mongoose.model('User', userSchema)