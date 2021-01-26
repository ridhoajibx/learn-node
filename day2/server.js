const http = require('http');
const port = 3000;
const hostname = "localhost";

const server = http.createServer((req, res) => {
    // console.log("request URL: ", req.url);
    // console.log("request Method: ", req.method);
    res.setHeader("Content-Type", "text/plain");
    res.write("Welcome to ckmobile");
    res.end();
});

server.listen(port, hostname, () =>{
    console.log(`listening on port: ${port}`);
})