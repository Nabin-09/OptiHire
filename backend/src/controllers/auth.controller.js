import { userModel } from "../models/User.model.js";

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


}

