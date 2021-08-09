//get enviourment config
require('dotenv').config()

//get express
const express = require('express')
//start express
const app = express()
//get mongoose
const mongoose = require('mongoose')

const port = 3000;

//connect to mongodb with db url from .env file
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })

//start db connection
const db = mongoose.connection

//on error consolelog it
db.on('error', (error) => console.log(error))
//when opened console log it
db.once('open', () => console.log('Connected to Database'))


//middleware use json 
app.use(express.json())

//route to /localhost/channels
const channelsRouter = require('./routes/Channels.js')
app.use('/channels', channelsRouter)

//route to /localhost/subscribers
const subscribersRouter = require('./routes/Subscribers.js')
app.use('/subscribers', subscribersRouter)


//listen on port 
app.listen(port, () => console.log(`Server has started on port ${port}`))

