const jwt = require("jsonwebtoken")

const authenticateToken = (req , res, next)=>{

    const authHeader = req.headers["authorization"];
    console.log(authHeader)
    const token = authHeader && authHeader.split(" ")[1];
    if(token == null){
        return res.sendStatus(401)
    }
    jwt.verify(token , process.env.JWT_SECRET , (err,user)=>{
        if(err) return res.sendStatus(403);

        req.user = user;
        console.log(user);
        next()
    })
}
module.exports = authenticateToken