const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser');
const cors = require('cors')



//Create a Databaase Connection

mongoose.connect('mongodb+srv://talhadev_db_user:d8yI4YuZo7GCW3VN@cluster0.pfxigve.mongodb.net/')
.then(()=>console.log("MongoDB Connected"))
.catch((error)=>console.log(error));

const app = express()
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: 'http://localhost:5173/',
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    allowedHeaders : [
        'Content-Type',
        'Authorization',
        'Cache-Control',
        'Expires',
        'Pragma'
    ],
    credentials : true
}));

app.use(cookieParser())
app.use(express.json())

app.listen(PORT, ()=> console.log(`Server is now running on ${PORT}`))