const http =require('http');
const express = require('express');
const app = express();
app.use('/2',(req,res,next)=>{
    console.log("Tuesday");
    res.send("<h1>Tuesday</h1>")
})
app.use('/3',(req,res,next)=>{
    console.log("wednesday");
    res.send("<h1>Wednesday</h1>")
})
app.use('/4',(req,res,next)=>{
    console.log("Thursday");
    res.send("<h1>Thursday</h1>")
})
app.use('/5',(req,res,next)=>{
    console.log("Friday");
    res.send("<h1>Friday</h1>")
})
app.use('/6',(req,res,next)=>{
    console.log("Saturday");
    res.send("<h1>Saturday</h1>")
}) 
app.use('/',(req,res)=>{
    res.send("Monday");
    console.log("Monday");
})
// app.use((req,res,next)=>{
//     console.log("February");
//    next();
// })
// app.use((req,res,next)=>{
//     console.log("March");
//    next();
// })
// app.use((req,res,next)=>{
//     console.log("April");
//    next();
// })
// app.use((req,res,next)=>{
//     console.log("May");
//    next();
// })
// app.use((req,res,next)=>{
//     console.log("June");
//    next();
// })
// app.use((req,res,next)=>{
//     console.log("July");
//    next();
// })
// app.use((req,res,next)=>{
//     console.log("August");
//    next();
// })
// app.use((req,res,next)=>{
//     console.log("September");
//    next();
// })
// app.use((req,res,next)=>{
//     console.log("October");
//    next();
// })
// app.use((req,res,next)=>{
//     console.log("November");
//    next();
// })



const sever = http.createServer();
app.listen(3000);