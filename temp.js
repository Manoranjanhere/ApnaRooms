const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const path = require('path');
const Listing = require("./models/listing.js");
const engine = require('ejs-mate');
const ExpressError = require('./utils/ExpressError.js');
const wrapAsync = require('./utils/wrapAsync.js');
const validateListing=require("./utils/ValidateListing.js");

app.engine('ejs', engine);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./public")));

//Mongoose initialisation
const Mongo_URL = 'mongodb://127.0.0.1:27017/AnyRoom';

main().then(() => {
    console.log("Database connected");
}).catch((err) => {
    console.log
});

async function main() {
    await mongoose.connect(Mongo_URL);
}


//Root Node
app.get("/", async (req, res) => {
    res.redirect('/listings')
})

app.get("/testing",wrapAsync(async (req,res)=>{
    const r1=new Review({
        rating:2,
        content: "Excellent"
    });

    await r1.save();
    console.log("done");
}))
app.get("*",(req,res,next)=>{
    throw next(new ExpressError(404,"Page Not Found"));
})
//Error Handling

app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Internal Server Error" } = err;
    console.log(err.message);
    res.status(statusCode).render("Error.ejs", { statusCode, message });
})
app.listen(8080, () => {
    console.log("Server listening on port 8080");
})
