const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const userSchema = new mongoose.Schema({
 name :{
    type : String,
    required : true,
    unique : true
 },
 email :{
    type : String,
    required : true ,
    unique : true
 } ,
 password : {
    type : String ,
    required : true , 
    unique : true
 }
})

userSchema.methods.comparePassword = async function(userPassword){
    console.log('inside the comparePassword')
    return await bcrypt.compare(userPassword , this.password)
}

const User = mongoose.model("User" , userSchema)
module.exports = User