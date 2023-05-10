const express=require('express');
const cors=require('cors');
const router=require("./routes/userRoute.js")
const busRoute=require("./routes/busroute.js")
const bookingsRoute=require('./routes/bookingsRoute.js')
require('dotenv').config()
const dbConnect=require("./config/connect.js")
const app=express()


app.use(cors())





app.use(express.json())
app.use("/user",router)
app.use("/buses",busRoute)
app.use("/api/bookings",bookingsRoute)

app.listen(5000,()=>{
    console.log('in')
})


