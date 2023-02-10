const express = require('express')
const router = express.Router()
const { verifyToken}  = require("../utils/util")
//importing controllers

const {register} = require("../controller/user")

router.post("/auth/register",register)

module.exports.router = router
