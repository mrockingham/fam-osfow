const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const passport = require('passport')
const session = require('express-session')
const connectDB = require('./config/db')

// Load config

dotenv.config({path: './config/config.env'})

//passport config
require('./config/passport')(passport)

connectDB()

const server =express()

server.use(express.json())
if(process.env.NODE_ENV === 'development'){
    server.use(morgan('dev'))
}
//sessions

server.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  
}))

//passport middleware
server.use(passport.initialize())
server.use(passport.session())

//Routes

server.use('/', require('./routes/index'))
server.use('/auth', require('./routes/auth'))

const PORT = process.env.PORT || 5001

server.listen(
    PORT,
     console.log(`server running in ${process.env.NODE_ENV} Node on port ${PORT}`))