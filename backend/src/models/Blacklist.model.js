import mongoose from "mongoose";


const blackListTokenSchema = new mongoose.Schema({
    token : {
        type : String ,
        required : [true , 'Needed to added in Blacklist! ']
    }
},{
    timestamps : true
})

export const tokenBlackListModel = mongoose.model('blackListTokens' , blackListTokenSchema);