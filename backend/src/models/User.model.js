import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : {
        type : String ,
        unique : [true , 'Username already taken'],
        require : true,
        trim : true
    },
    
})