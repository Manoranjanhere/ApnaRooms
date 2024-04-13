const express = require('express');
const router=express.Router();
const Listing = require("../models/listing.js");


const wrapAsync = require('../utils/wrapAsync.js');
const validateListing=require("../utils/ValidateListing.js");

//Index Route
router.get("/", wrapAsync(async (req, res) => {
    let listings = await Listing.find({});
    res.render("./listings/index.ejs", { listings });
}));

//Create Route
router.get("/new", (req, res) => {
    res.render("./listings/newListing.ejs");
})

router.post("/", validateListing,wrapAsync(async (req, res) => {
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
}));



//Show Route

router.get("/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id).populate("reviews");
    res.render("./listings/listing.ejs", { listing });
}));

//Update Route

router.get("/:id/edit", wrapAsync(async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    res.render("./listings/editListing.ejs", { listing });
}));

router.put("/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listings/${id}`);
}));

//Delete Route

router.delete("/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
}));



module.exports=router;