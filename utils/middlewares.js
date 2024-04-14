const {reviewSchema}=require("./Schema.js");
const {listingSchema}=require("./Schema.js");
const ExpressError=require("./ExpressError.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");

module.exports.wrapAsync= (fn) => {
    return function (res, req, next) {
        fn(res,req,next).catch(err => {
            next(err);
        })
    }
}


module.exports.validateReview= (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg)
    }
    else {
        next();
    }
}


module.exports.validateListing= (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg)
    }
    else {
        next();
    }
}

module.exports.isLoggedIn=(req,res,next)=>{
    if(!req.isAuthenticated()){
        req.session.redirectUrl=req.originalUrl;
        req.flash("error","You have to login to access this page");
        res.redirect("/login");
    }
    else{
    next();}
}

module.exports.saveRedirectUrl=(req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl=req.session.redirectUrl
    }
    next();
}

module.exports.isOwner=async (req,res,next)=>{
    let{id}=req.params;
    let listing=await Listing.findById(id);
    if(!(res.locals.currUser && res.locals.currUser._id.equals(listing.owner._id))){
        req.flash("error","You dont have access to this");
        return res.redirect(`/listings/${id}`);
    }
    next();
}

module.exports.isAuthor=async (req,res,next)=>{
    let{id,reviewId}=req.params;
    let review =await Review.findById(reviewId);
    if(!(res.locals.currUser && res.locals.currUser._id.equals(review.author._id))){
        req.flash("error","You dont have access to this");
        return res.redirect(`/listings/${id}`);
    }
    next();
}