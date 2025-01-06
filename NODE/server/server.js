const http = require("http");
const fs = require("fs");
const path = require("path");
// helps in everything related to path
const port = 3000;
const server = http.createServer((req, res) => {
  // 1. what is the request that is coming in
  // 2. what is the response that we are sending back or what should we do when that request comes up
  /*
    if the request url is / --> i want to send the index.html
    */
  const filePath = path.join(
    __dirname,
    req.url === "/" ? "index.html" : req.url
  );
  // join has property to reference the current directory where you are
  // __dirname is the directory where the current file is present

  const extName = String(path.extname(filePath)).toLowerCase();

  // what type of file i am supporting
  const mimeTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".png": "image/png",
    ".jpg": "image/jpg",
    ".jpeg": "image/jpeg",
  };

  // now we have to define object content type
  const contentType = mimeTypes[extName] || "application/octet-stream";

  // 'application/octet-stream'is a default type of file that we are sending

  // now fs will read the file and go ahead and serve it

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("404 : File not found");
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });
});
// now server listening on the port

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
