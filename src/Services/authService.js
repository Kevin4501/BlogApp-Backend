const User = require("../Models/userModel")
const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const register = async(userData)=>{
    try{
        let regUser = await User.findOne({email : userData.email})
        if(regUser){
            throw new error("User Already Exists")
        }
        const user = new User(userData)
        const salt = await bcrypt.genSalt(4)
        const hashPassword = await bcrypt.hash(userData.password  ,salt)
        user.password = hashPassword
        await user.save()
    }
    catch(err){
        throw err
    }
}

const login = async(userData)=>{
    try{
        console.log("hi from service")

        const {email , password} = userData;
        const logUser = await User.findOne({email : email})
        console.log(logUser)
        if(!logUser){
            throw new error("User Not Found")
        }
        const isMatch = await logUser.comparePassword(password)
        if(!isMatch){
            throw new error("Invalid Credential")
        }

        const token = await jwt.sign({id:logUser._id} , process.env.JWT_SECRET)
        console.log(token)
        return {token , logUser}
    }
    catch(err){
        throw err
    }
}

module.exports = {register , login}