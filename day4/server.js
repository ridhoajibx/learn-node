const http = require('http');
const port = 8000;
const fs = require('fs');
const moment = require('moment');
const hostname = "localhost";

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    let route = "./views/"
    switch (req.url) {
        case '/':
            route += 'index.html';
            res.statusCode = 200;
            break;
        case '/contact':
            route += 'contact.html';
            res.statusCode = 200;
            break;
        case '/contact-us':
            // rediect
            res.statusCode = 301;
            res.setHeader('Location', '/contact');
            res.end();
            break;

        default:
            route += '404.html';
            res.statusCode = 404;
            break;
    }
    fs.readFile(route, (err, body) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.write(body);
            res.end();
        }
    });
});

server.listen(port, hostname, () => {
    console.log(`listening on port: ${port}`);
})