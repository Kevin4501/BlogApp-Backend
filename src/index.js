
require('dotenv').config({path:"src/.env"});
const authenticateToken = require('../src/Middlewares/authenticateToken.js')
const authRoutes = require("./Routers/authRoutes.js")
const blogsRouters = require("./Routers/blogsRoutes.js")
const express = require("express")
const mongoose = require("mongoose")
const PORT = process.env.PORT
const app = express()
app.use(express.json())
const cors = require("cors")

app.use(cors())
app.use("/api/users",authRoutes)
app.use("/api/blogs",blogsRouters)
mongoose.connect(process.env.MONGODB_URI)
.then(()=>console.log("DB IS CONNECTED"))
.catch((error)=>console.log("Could not connect to DB" , error))

app.listen(PORT , ()=>console.log(`APP IS RUNNING IN PORT ${process.env.PORT}`))