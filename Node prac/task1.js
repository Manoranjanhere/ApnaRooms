const http = require('http');
const server = http.createServer((req,res)=>
{
    const url = req.url;
    if(url==='/father')
    {
    res.setHeader('Contetn-type','text/html');
    res.write('<html>')
    res.write('<head><title>Manoranjan</title></head>')
    res.write('<body><h1>Niranjan</h1><form action="/age" method="post"><input type="text"></form></body>')
    res.write('</html>')
    return res.end();
    }
    res.setHeader('Contetn-type','text/html');
    res.write('<html>')
    res.write('<head><title>Manoranjan</title></head>')
    res.write('<body><h1>51 </h1></body>')
    res.write('</html>')
    res.end();
})
server.listen(8000);