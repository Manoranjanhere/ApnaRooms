const express=require('express');
const app=express();
const mongoose=require('mongoose');
const methodOverride=require('method-override');
const path=require('path');
const Listing=require("./models/listing.js");
const engine=require('ejs-mate');

app.engine('ejs', engine);
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"./public")));

//Mongoose initialisation
const Mongo_URL='mongodb://127.0.0.1:27017/AnyRoom';

main().then(()=>{
    console.log("Database connected");
}).catch((err)=>{
    console.log
});

async function main(){
    await mongoose.connect(Mongo_URL);
}


//Root Node
app.get("/",async(req,res)=>{
    res.send('root node');
})

//Index Route
app.get("/listings",async (req,res)=>{
    let listings=await Listing.find({});
    res.render("./listings/index.ejs",{listings});
})

//Create Route
app.get("/listings/new",(req,res)=>{
    res.render("./listings/newListing.ejs");
})

app.post("/listings",async(req,res)=>{
    const newListing=new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
})
//Show Route

app.get("/listings/:id",async (req,res)=>{
    let{id}=req.params;
    let listing=await Listing.findById(id);
    res.render("./listings/listing.ejs",{listing});
})

//Update Route

app.get("/listings/:id/edit",async(req,res)=>{
    let {id}=req.params;
    let listing= await Listing.findById(id);
    res.render("./listings/editListing.ejs",{listing});
})

app.put("/listings/:id",async (req,res)=>{
    let {id}=req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect(`/listings/${id}`);
});

//Delete Route
app.delete("/listings/:id",async(req,res)=>{
    let {id}=req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
})
app.listen(8080,()=>{
    console.log("Server listening on port 8080");
})