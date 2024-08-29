const express = require('express');
const app= express();
const bp = require('body-parser');
const path = require('path');
app.use(bp.urlencoded({extended:false}));

app.get('/IPL',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="title"/><button type="submit">generate</button></form>')
})

app.post('/product',(req,res,next)=>{
    if(req.body.title==='RCB'){
        res.sendFile(path.join(__dirname,'..','views','a.html'))
    }
    else{
        res.send('<h1>MS Dhoni</h1>')
    }
})  

module.exports = app;