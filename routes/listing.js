const express = require('express');
const router=express.Router();
const Listing = require("../models/listing.js");

const {validateListing,isLoggedIn,wrapAsync}=require("../utils/middlewares.js");

//Index Route
router.get("/", wrapAsync(async (req, res) => {
    let listings = await Listing.find({});
    res.render("./listings/index.ejs", { listings });
}));

//Create Route
router.get("/new", isLoggedIn,(req, res) => {
    res.render("./listings/newListing.ejs");
})

router.post("/", isLoggedIn,validateListing,wrapAsync(async (req, res) => {
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    req.flash("success","New Listing Created");
    res.redirect("/listings");
}));



//Show Route

router.get("/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id).populate("reviews");
    if(!listing){
        req.flash("error","Listing Does Not Exist");
        console.log("dosss")
        res.redirect("/listings")
    }
    res.render("./listings/listing.ejs", { listing });
}));

//Update Route

router.get("/:id/edit", isLoggedIn, wrapAsync(async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if(!listing){
        req.flash("error","Listing Does Not Exist");
        res.redirect("/listings")
    }
    res.render("./listings/editListing.ejs", { listing });
}));

router.put("/:id", isLoggedIn,wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    req.flash("success","Listing Updated");
    res.redirect(`/listings/${id}`);
}));

//Delete Route

router.delete("/:id",isLoggedIn, wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success","Listing Deleted");
    res.redirect("/listings");
}));



module.exports=router;