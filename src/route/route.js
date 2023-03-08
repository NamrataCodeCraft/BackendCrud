const userController = require('../controllers/userController')
const express = require('express')
const authantication = require('../auth/auth')
const router = express.Router()
router.post('/user', userController.createUser)
router.post('/login', userController.login)
router.post('/update/:id',authantication, userController.userUpdate)

module.exports = router