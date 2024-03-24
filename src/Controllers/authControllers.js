
const authService = require("../Services/authService")


const register = async(req , res)=>{
    try{
        const userData = req.body
        const registerUser = await authService.register(userData)
        res.status(200).json({
            "message" : "User Registered Successfully"
        })
        return registerUser
    }
    catch(err){
        res.status(500).json({
            "err" : err
        })
    }
}

const login = async(req , res)=>{
    try{
        console.log("hi from Login")
        const userData = req.body;
        console.log(userData)
        
        const{token , userId} = await authService.login(userData)
        console.log(token)
        res.status(201).json({
            message : "User logged in successfully",
            token,
            userId
        })
    }
    catch(err){
        res.status(500).json({
            "err" : err
        })
    }
}
module.exports={register , login}