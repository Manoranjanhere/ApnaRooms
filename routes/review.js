const express = require('express');
const router=express.Router({mergeParams:true});

const Listing = require("../models/listing.js");
const Review = require("../models/review.js");


const {validateReview,isLoggedIn,wrapAsync}=require("../utils/middlewares.js");



//Create Route
router.post("/",isLoggedIn,validateReview,wrapAsync(async (req,res)=>{
    let {id} =req.params;
    let review=new Review(req.body.review);
    let listing=await Listing.findById(id);
    listing.reviews.push(review);
    await review.save();
    await listing.save();
    req.flash("success","New Review Created");
    res.redirect(`/listings/${id}`);
}));

//Delete Route

router.delete("/:reviewId",isLoggedIn,wrapAsync(async (req,res)=>{
    let {id,reviewId}= req.params;
    await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}})
    await Review.findByIdAndDelete(reviewId);
    req.flash("success","Review Deleted");
    res.redirect(`/listings/${id}`);
}))

module.exports=router;