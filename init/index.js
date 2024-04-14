const mongoose=require('mongoose');
const Listing=require("../models/listing.js");
const initData=require("./data.js");
const Mongo_URL='mongodb://127.0.0.1:27017/AnyRoom';

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
    initData.data=initData.data.map((el)=>({...el,owner:"661bae9435c9816293206734"}));
    await Listing.insertMany(initData.data);
    console.log("done");
}

initDb();
