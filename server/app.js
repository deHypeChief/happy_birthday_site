const express = require('express')
const connectToMongoDB = require('./db/connectDB')
const router = require('./services/routes')
const cors = require('cors')
const bodyParser = require('body-parser')

var path = require('path');
var fs = require('fs');


// configs
require('dotenv').config()
const PORT = process.env.PORT || 3000
connectToMongoDB(
    process.env.NODE_EVN === 'prod' ? 
        "mongodb://localhost:27017/happyPost" : 
        process.env.DB_URI 
    )
// middleware
const app = express()
// app.use(express.json())
// app.use(express.urlencoded({extended:false}))
app.use(bodyParser.json({ limit: '10mb' }))
app.use(bodyParser.urlencoded({ extended: false, limit: '10mb' }));
app.use(cors())


// static route
app.get("/", (req, res)=>{
    res.status(200).json({
        status: "All systems ok",
        message: "Service is Live"
    })
})
app.use('/api', router);


app.listen(PORT, ()=>{
    console.log('Server running on ', PORT);
})
