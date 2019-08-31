import  userControllers from '../controllers/userController'

const express = require('express')

const router = express.Router()

// const signup = userControllers;

router.post("/auth/users", userControllers.signup);
router.post("/auth/login", userControllers.signin);

export default router;