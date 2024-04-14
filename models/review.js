const { required } = require('joi');
const mongoose=require('mongoose');
const { Schema } = mongoose;
const reviewSchema=new mongoose.Schema({
    rating:{
        type:Number,
        min:1,
        max:5,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        required:true,
    },
    author:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true,
    }
})

const Review=mongoose.model("Review",reviewSchema);

module.exports=Review;