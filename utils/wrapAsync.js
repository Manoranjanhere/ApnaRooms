const ExpressError = require("./ExpressError")

module.exports= (fn) => {
    return function (res, req, next) {
        fn(res,req,next).catch(err => {
            next(err);
        })
    }
}
