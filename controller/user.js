//importing models
const { Admin, User } = require("../database/database")
const { generateAcessToken } = require('../utils/util')
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const axios = require('axios')
const Flutterwave = require('flutterwave-node-v3');
const flw = new Flutterwave(process.env.FLW_PUBLIC_KEY, process.env.FLW_SECRET_KEY);



module.exports.register = async (req, res, next) => {
    try {
        let {
            firstName,
            lastName,
            ageRange,
            course,
            modeOfLearning,
            price,
            duration,
            email,
            phoneNumber,
        } = req.body

        //check if admin exist
        let userExist = await User.findOne({ email: email })

        if (userExist) {
            let error = new Error("user already existed")
            return next(error)
        }





        //creating a new user 
        let newUser = new User({
            _id: new mongoose.Types.ObjectId(),
            firstName,
            lastName,
            ageRange,
            course,
            modeOfLearning,
            price,
            duration,
            email,
            phoneNumber,
        })

        //saving the user
        let savedUser = await newUser.save()

        if (!savedUser) {
            let error = new Error("resource not saved")
            return next(error)
        }
        
        

        //at this point,return jwt token and expiry alongside the user credentials
        return res.status(200).json({
            response:'successfully registered.our admin we get back to you',
        })
    } catch (error) {
        error.message = error.message || "an error occured try later"
        return next(error)
    }
}

