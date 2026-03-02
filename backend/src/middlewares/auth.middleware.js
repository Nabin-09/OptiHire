import jwt from 'jsonwebtoken'
import { tokenBlackListModel } from '../models/Blacklist.model.js';


export async function authUser(req , res , next){
    const token =  req.cookies.token;
    if(!token){
        return res.status(401).json({
            message : 'Token not provided!'
        })
    }

    const isTokenBlackListed = await tokenBlackListModel.findOne({token});
    if(isTokenBlackListed){
        return res.status(401).json({
            message : 'Invalid token'
        })
    }
    try{
        const decoded = jwt.verify(token , process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }catch(err){
        return res.status(401).json({
            message : 'Invalid URL'
        })
    } 
}