let my =new Promise((Resolve,Reject)=>
{
    Resolve();
})

my.then(()=>{
    console.log('success');
}).catch(()=>{
    console.log('failed')
})