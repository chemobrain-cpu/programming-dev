//importing models
const { Admin, User } = require("../database/database")

const { generateAcessToken } = require('../utils/util')
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")



module.exports.getUser = async (req, res, next) => {
    try {

        let users = await User.find()

        if (!users) {
            let error = new Error("an error try later")
            return next(error)
        }

        return res.status(200).json({
            response: users
        })

    } catch (error) {
        error.message = error.message || "an error occured try later"
        return next(error)
    }


}


