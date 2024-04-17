const mongoose=require('mongoose');
const Listing=require("../models/listing.js");
const User=require("../models/user.js");
const initData=require("./data.js");

const mbxGeoCoding = require('@mapbox/mapbox-sdk/services/geocoding');
const geocodingClient = mbxGeoCoding({ accessToken: "pk.eyJ1Ijoic2FiaWNrIiwiYSI6ImNsdjBhNmZpbjFpb28yam55MzN0enRyNHYifQ.L4SDgamuTdZ8p_XNeQ-Dmg"});

main().then(()=>{
    console.log("Database connected");
}).catch((err)=>{
    console.log
});

async function main(){
    await mongoose.connect("mongodb+srv://sabick:db123atlas@cluster0.vh2sqbo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
}

const initDb=async()=>{
    await Listing.deleteMany({});
    

    for(data of initData.data){
        let response= await geocodingClient.forwardGeocode({
            query: data.location,
            limit: 1
          }).send();
        let geometry=response.body.features[0].geometry;
        data.owner="661f750d792bb5e4397cca68";
        data.geometry=geometry;
    }

    await Listing.insertMany(initData.data);
    console.log("done");
}

initDb();
