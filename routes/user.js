const express = require('express');
const wrapAsync = require('../utils/wrapAsync');
const router = express.Router();
const User = require("../models/user.js");
const passport = require('passport');
const { saveRedirectUrl } = require('../utils/middlewares.js');

//signup
router.get("/signup", (req, res) => {
    res.render("./user/signup.ejs");
})

router.post("/signup", wrapAsync(async (req, res) => {
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
        req.flash("error", e.message);
        res.redirect("/signup");
    }
}));

//login

router.get("/login", (req, res) => {
    res.render("./user/login.ejs");
});

router.post("/login",saveRedirectUrl,passport.authenticate('local', { failureRedirect: "/login", failureFlash: true }),
    (req, res) => {
        req.flash("success", "Welcome back to AnyRooms");
        const redirectUrl= res.locals.redirectUrl || "/listings";
        res.redirect(redirectUrl);
    });

//logout

router.get("/logout", (req, res) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "You are Logged Out");
        res.redirect("/listings");
    });
})
module.exports = router;