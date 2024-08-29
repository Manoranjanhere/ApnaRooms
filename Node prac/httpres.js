const http = require('http');
const server = http.createServer((req,res)=>
{
    const url = req.url;
    if(url==='/')
    {
    res.setHeader('Contetn-type','text/html');
    res.write('<html>')
    res.write('<head><title>Manoranjan</title></head>')
    res.write('<body><h1>welcome to my page</h1></body>')
    res.write('</html>')
    return res.end();
}
    res.setHeader('Contetn-type','text/html');
    res.write('<html>')
    res.write('<head><title>Manoranjan</title></head>')
    res.write('<body><h1>Hello</h1></body>')
    res.write('</html>')
    res.end();
})
server.listen(5);