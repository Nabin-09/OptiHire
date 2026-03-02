import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : {
        type : String ,
        unique : [true , 'Username already taken'],
        require : true,
        trim : true
    },
    email : {
        type : String ,
        unique : [true , 'Email already exists'],
        required : true ,
        trim : true
    },
    password : {
        type : String ,
        required : true,
    }
});

export const userModel = mongoose.model('Users' ,userSchema )