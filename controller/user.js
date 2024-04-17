
const User=require("../models/user.js");

module.exports.getSignup=(req, res) => {
    res.render("./user/signup.ejs");
};

module.exports.signup=async (req, res) => {
    try {
        let { username, email, password } = req.body;
        let user = {
            username: username,
            email: email,
        }
        const registeredUser=await User.register(user, password);
        req.login(registeredUser,(err)=>{
            if(err){
                return next(err);
            }
            req.flash("success", "Your are Registered. Welcome to AnyRooms");
            res.redirect("/listings");
        })
    }
    catch (e) {
        console.log(e);
        req.flash("error", e.message);
        res.redirect("/signup");
    }
};

module.exports.getLogin=(req, res) => {
    res.render("./user/login.ejs");
};

module.exports.login=(req, res) => {
    req.flash("success", "Welcome back to AnyRooms");
    const redirectUrl= res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
};

module.exports.logout=(req, res) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "You are Logged Out");
        res.redirect("/listings");
    });
}
