
import express from 'express';
import {signIn, signUp, forgotMyPassword} from '../controllers/auth.controller.js';

const router = express.Router();

// define a route

router.get('/signin', signIn); // use the login method from the UserController class
router.get('/signup', signUp); // use the postLogin method from the UserController class
router.get('/forgot-my-password', forgotMyPassword); 




export default router;