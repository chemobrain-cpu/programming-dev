const express = require('express')
const router = express.Router()
const { verifyToken}  = require("../utils/util")
//importing controllers

const {getUser} = require("../controller/admin")

router.get("/auth/users",getUser)

module.exports.router = router
