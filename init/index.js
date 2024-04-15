const mongoose=require('mongoose');
const Listing=require("../models/listing.js");
const initData=require("./data.js");
const Mongo_URL='mongodb://127.0.0.1:27017/AnyRoom';

const mbxGeoCoding = require('@mapbox/mapbox-sdk/services/geocoding');
const geocodingClient = mbxGeoCoding({ accessToken: "pk.eyJ1Ijoic2FiaWNrIiwiYSI6ImNsdjBhNmZpbjFpb28yam55MzN0enRyNHYifQ.L4SDgamuTdZ8p_XNeQ-Dmg"});

main().then(()=>{
    console.log("Database connected");
}).catch((err)=>{
    console.log
});

async function main(){
    await mongoose.connect(Mongo_URL);
}

const initDb=async()=>{
    await Listing.deleteMany({});
    
    for(data of initData.data){
        let response= await geocodingClient.forwardGeocode({
            query: data.location,
            limit: 1
          }).send();
        let geometry=response.body.features[0].geometry;
        data.owner="661bae9435c9816293206734";
        data.geometry=geometry;
    }
    console.log(initData.data);
    await Listing.insertMany(initData.data);
    console.log("done");
}

initDb();
