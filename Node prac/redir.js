const http = require('http');
const server = http.createServer((req,res)=>
{
    const url = req.url;
    const fs = require('fs');
    const method = req.method;
    if(url==='/')
    {
    res.setHeader('Contetn-type','text/html');
    res.write('<html>')
    res.write('<head><title>Manoranjan</title></head>')
    res.write('<body> <form action="/message" method="post"><input type="text"></form> </body>')
    res.write('</html>')
    return res.end();
}
   if(url ==='/message' && method ==='post')
   {
    file.writeFileSync("aner.txt",'samples')
    res.setHeader('Contetn-type','text/html');
    res.write('<html>')
    res.write('<head><title>Manoranjan</title></head>')
    res.write('<body><h1>welcome</h1></body>')
    res.write('</html>')
   }
})
server.listen(5);