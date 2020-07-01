const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    googleId:{
        type: String,
        requred: true
    },
    displayName:{
        type: String,
        requred: true
    },
    firstName:{
        type: String,
        requred: true
    },
    lastName:{
        type: String,
        requred: true
    },
    image:{
        type: String,
        
    },
    createdAt: {
        type: Date,
        defualt: Date.now
    }
    
})

module.exports = mongoose.model('User', UserSchema)