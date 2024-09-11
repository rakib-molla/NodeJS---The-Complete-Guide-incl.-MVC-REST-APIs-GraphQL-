const http = require("http");
const fs = require("fs");
const { parse } = require("path");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  console.log(url);
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
});

server.listen(3000, () => {
  console.log("Server is running 3000");
});
