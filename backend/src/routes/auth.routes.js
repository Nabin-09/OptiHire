import {Router} from 'express'
import { loginUserController, registerUserController } from '../controllers/auth.controller.js';

const authRouter = Router();
/**
 * @route POST /api/auth/register
 * @description Register a new user
 * @access Public
 */

authRouter.post('/register', registerUserController);
/**
 * @route POST /api/auth/login
 * @description logins user with email and password 
 * @access Public
 */
authRouter.post('/login' , loginUserController)

export default authRouter