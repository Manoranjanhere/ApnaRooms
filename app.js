if (process.env.NODE_ENV != "production") {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const path = require('path');
const engine = require('ejs-mate');
const ExpressError = require('./utils/ExpressError.js');
const { wrapAsync } = require('./utils/middlewares.js');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const passport = require("passport");
const LocalStratergy = require('passport-local');
const User = require("./models/user.js");
const listingRouter = require('./routes/listing.js');
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");
const https = require('https');

app.engine('ejs', engine);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./public")));


//Mongoose initialisation
const Mongo_URL = process.env.MONGO_URL;

main().then(() => {
    console.log("Database connected");
}).catch((err) => {
    console.log("error in db")
});

async function main() {
    await mongoose.connect(Mongo_URL);
}

const store=MongoStore.create({
    mongoUrl:Mongo_URL,
    crypto:{
        secret: process.env.SECRET,
    },
    touchAfter:24*3600,
});

const sessionOptions = {
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 5 * 365 * 24 * 60 * 60 * 1000,
        maxAge:  5 * 365 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    },
};

app.use(session(sessionOptions));
app.use(flash());


app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStratergy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});

//routes
app.use("/listings", listingRouter);
app.use("/listings/:id/review", reviewRouter);
app.use("/", userRouter);


//Root Node
app.get("/", async (req, res) => {
    res.redirect('/listings')
})

// Ping route for health check
app.get("/ping", (req, res) => {
    res.status(200).send("ApnaRooms service is up and running!");
});

//TESTING NODE


app.get("/testing", wrapAsync(async (req, res) => {
    res.send("hi");
}));



//All GET
app.get("*", (req, res, next) => {
    throw next(new ExpressError(404, "Page Not Found"));
})

//Error Handling

app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Internal Server Error" } = err;
    console.log(err.message);
    res.status(statusCode).render("Error.ejs", { statusCode, message });
})


//Listen Node
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

// Self-ping mechanism to prevent Render from putting the app to sleep
// Only run in production environment
if (process.env.NODE_ENV === "production") {
    const RENDER_EXTERNAL_URL = process.env.RENDER_EXTERNAL_URL || "https://apnarooms.onrender.com";
    
    setInterval(() => {
        https.get(`${RENDER_EXTERNAL_URL}/ping`, (res) => {
            console.log(`Self-ping performed. Status code: ${res.statusCode}`);
        }).on('error', (err) => {
            console.error('Self-ping error:', err.message);
        });
    }, 840000); // Ping every 14 minutes (840000 milliseconds)
}