const express = require('express');
const router = express.Router();

const { validateListing, isLoggedIn, wrapAsync, isOwner } = require("../utils/middlewares.js");

const listingController = require("../controller/listing.js");
const multer  = require('multer')
const {storage}=require("../utils/cloudConfig.js");
const upload = multer({ storage });

router.route("/")
    .get(wrapAsync(listingController.index))
    .post(isLoggedIn, upload.array('uploadedImages',5),validateListing, wrapAsync(listingController.createListing));


router.get("/new", isLoggedIn, listingController.createListingForm);


router.route("/:id")
    .get( wrapAsync(listingController.showListings))
    .put( isLoggedIn, upload.array('uploadedImages',5),isOwner, wrapAsync(listingController.updateListing))
    .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));

router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.updateListingForm));





module.exports = router;