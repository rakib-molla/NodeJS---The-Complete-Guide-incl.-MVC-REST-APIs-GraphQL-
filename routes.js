const fs = require('fs');

const requestHandler = (req, res)=>{
   const url = req.url;
   const method = req.method;

   if (url === "/") {
      res.setHeader("Content-Type", "text/html");
      res.write("<html>");
      res.write("<head><tile>Node js</tile></head>");
      res.write(
        "<body> <form method='POST' action='/message'> <input type='text' name='name'/> <input type='submit' /></form> </body>"
      );
      res.write("</html>");
      console.log(res.statusCode);
      return res.end();
    }
   
    if (url === "/message" && method === "POST") {
      const body = [];
      req.on("data", (chunk) => {
        body.push(chunk);
      });
      return req.on("end", () => {
        const parseBody = Buffer.concat(body).toString();
        const message = parseBody.split("=")[1];
        fs.writeFile("message.txt", message, (err) => {
          res.statusCode = 301;
          res.setHeader("Location", "/");
          return res.end();
        });
      });
    }
   
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><tile>Node js</tile></head>");
    res.write("<body> <h1>Welcome to node js server</h1></body>");
    res.write("</html>");
}

module.exports = requestHandler ;

// module.exports = {
//    handler: requestHandler,
//    someText: 'Some hard coded text'
// }

// module.exports.handler = requestHandler;
// module.exports.someText = 'some hard coded text';

exports.handler  = requestHandler;
exports.someText = 'some hard coded text';
