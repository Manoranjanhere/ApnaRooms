const express = require('express');
const wrapAsync = require('../utils/wrapAsync');
const router = express.Router();
const User = require("../models/user.js");
const passport = require('passport');
const { saveRedirectUrl } = require('../utils/middlewares.js');
const userController = require('../controller/user.js');

//signup
router.route("/signup")
    .get(userController.getSignup)
    .post(wrapAsync(userController.signup));

//login
router.route("/login")
    .get(userController.getLogin)
    .post(saveRedirectUrl, passport.authenticate('local', { failureRedirect: "/login", failureFlash: true }), userController.login);

//logout
router.get("/logout",userController.logout);

module.exports = router;