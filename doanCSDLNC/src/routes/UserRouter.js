const express = require("express");
const router = express.Router()
const userController = require('../controllers/UserController')
const {authMiddleWare,authUserMiddleWare}= require("../middleware/authMiddleware");

router.post('/sign_up',userController.createUser)
router.post('/sign_in', userController.signinUser)
router.put('/update_user/:id', userController.updateUser)
router.delete('/delete_user/:id',authMiddleWare, userController.deleteUser)
router.get('/getall', authMiddleWare, userController.getAllUser)
router.get('/get_details/:id',authUserMiddleWare, userController.getDetailsUser)
router.post('/refresh_token', userController.refreshToken)

module.exports = router