const http = require('http');

const server = http.createServer((req, res)=>{
   // console.log(req.headers, req.method, req.url, req.statusCode, req.wrap)
   
   // process.exit();
   res.setHeader("Content-Type", "text/html");
   res.write("<html lan='en'></html>");
   res.write("<head><title>Node js Server</title></head>");
   res.write("<body><h1>Hello Node js server this data from backend</h1></body>")
   res.end();
})

server.listen(3000, 'localhost', ()=> {
   console.log('server is listening on port 3000')
})