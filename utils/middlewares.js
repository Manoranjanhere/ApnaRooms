const {reviewSchema}=require("./Schema.js");
const {listingSchema}=require("./Schema.js");
const ExpressError=require("./ExpressError.js");

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