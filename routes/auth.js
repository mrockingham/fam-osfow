const express = require('express')
const passport = require('passport')
const router = express.Router()

//desc Auth with Google
//@router GET /auth/google

router.get('/google', passport.authenticate('google', { scope: ['profile'] })) 

//desc Google auth callback
//@router GET /auth/google/callback


router.get('/google/callback', passport.authenticate('google', {failureRedirect: '/' }),
(req,res) =>{
    console.log(res)
    res.redirect('/dashboard')
} )
module.exports = router