const http = require('http');
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    const file=require('fs');

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head><title>Manoranjan</title></head>')
        res.write('<body> <form action="/message" method="POST"><input type="text" name="message"><button>Submit</button></form> </body>')
        res.write('</html>')
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        
        req.on('end',()=>{
            console.log("start")
            const parsebody=Buffer.concat(body).toString();a
            console.log(parsebody);
            const message = parsebody.split('=');
            file.writeFileSync('cse.txt',message[1]);
        })
        console.log("end")  

        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head><title>Manoranjan</title></head>')
        res.write('<body><h1>welcome</h1></body>')
        res.write('</html>')
        return res.end();
    }
});

server.listen(3000);
