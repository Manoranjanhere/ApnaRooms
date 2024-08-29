const express = require('express');
const app= express();
const bp = require('body-parser');

app.use(bp.urlencoded({extended:false}));
const admin =require('./routes/admin');
app.use(admin);
app.use((req,res,next)=>{
    res.status(404).send("<h1>Page not found</h1>")
})
app.listen(3000);
