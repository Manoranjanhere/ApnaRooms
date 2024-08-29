const http = require('http');
function rqListner(req,res)
{
    console.log(req);
}
const server = http.createServer(rqListner);
server.listen(5);