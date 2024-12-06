const https = require("http");
const path = require("path");
const fs = require("fs");
const url = require("url");
const server = https.createServer((req, res) => {
  const urlpath = url.parse(req.url, true);

  const pathname = urlpath.pathname;

  if (pathname === "/") {
    pathname = "/index.html";
  }

  const filepath = path.join(__dirname, pathname);
  //    console.log(urlpath);

  fs.readFile(filepath, (err, data) => {
    if (err) {
      res.end("bad gateway");
    }
    res.writeHead(200, { "Content-Type": "html/text" });
    return res.end(data);
  });
});

server.listen(3000, () => {
  console.log("running on 3000 port");
});
