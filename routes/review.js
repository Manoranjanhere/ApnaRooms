const express = require('express');
const router=express.Router({mergeParams:true});


const reviewController=require("../controller/review.js");
const {validateReview,isLoggedIn,wrapAsync,isAuthor}=require("../utils/middlewares.js");



//Create Route
router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.createReview));

//Delete Route

router.delete("/:reviewId",isLoggedIn,isAuthor,wrapAsync(reviewController.destroyReview))

module.exports=router;