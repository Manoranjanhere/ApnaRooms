setTimeout(()=>{
    console.log('Welcome')
},3000)
console.log("Manoranjan");


const a =setInterval(()=>{
    console.log('Welcome here')
},2000)
setTimeout(()=>{
    clearInterval(a);
},8000)


const fetchdata = (callback)=>{
    callback("Train Started");
}
setTimeout(()=>
{
    fetchdata((stat)=>{
        console.log(stat)
    })
},5000)
