const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
 if (req.url === "/") {
     res.statusCode = 200;
     res.setHeader("Content-Type", "text/plain");
     res.end("You are getting the response");
 }
 else if(req.url === "/about"){
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("You are getting the ABOUT response");
 }
 else{
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("Page not found");
 }
});

// so far we have written what server needs to respond but haven't mentioned how the server should listen

server.listen(port, hostname, () => {
  console.log(`Server is listening on http://${hostname}:${port}`);
});
