import bcrypt from "bcryptjs";
import { userModel } from "../models/User.model.js";
import jwt from 'jsonwebtoken'

/**
 * @name registerUserController
 * @description register a new user , expects username , email and password in req body
 * @access public 
 */
export async function registerUserController(req , res){
    const {username , email , password} = req.body;
    if(!username || !email || !password){
        return res.status(400).json({
            message : 'Please provide username and password'
        })
    }
    const doesUserExists = await userModel.findOne({
        $or : [{username} , {email}]
    })
    if(doesUserExists){
        return res.status(400).json({
            message : 'Account already exists with this email or username'
        })
    }
    const hash = await bcrypt.hash(password , 10);
    const user = await userModel.create({
        username , 
        email ,
        password : hash,
    })

    const token = jwt.sign(
        {id : user._id , username : user.username},
        process.env.JWT_SECRET,
        {expiresIn : '1d'}
    )

    res.cookie('token' , token);

    res.status(201).json({
        message : 'User registered successfully'
    })

}

