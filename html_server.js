const http = require('http');
const fs = require('fs');

const hostname = '0.0.0.0';
const port = 8080;

const server = http.createServer(function(request, response) { 
    if (request.url === '/styles.css') {
        response.writeHead(200, {"Content-Type": "text/css"});
        const css = fs.readFileSync('./styles.css', 'utf8');
        response.write(css);
        response.end();
    } else if (request.url === '/constants.js') {
        response.writeHead(200, {"Content-Type": "application/javascript"});
        const js = fs.readFileSync('./constants.js', 'utf8');
        response.write(js);
        response.end();
    } else if (request.url === '/pieces.js') {
        response.writeHead(200, {"Content-Type": "application/javascript"});
        const js = fs.readFileSync('./pieces.js', 'utf8');
        response.write(js);
        response.end();
    } else if (request.url === '/tetris.js') {
        response.writeHead(200, {"Content-Type": "application/javascript"});
        const js = fs.readFileSync('./tetris.js', 'utf8');
        response.write(js);
        response.end();
    } else {
        response.writeHead(200, {"Content-Type": "text/html"});
        const html = fs.readFileSync('./index.html', 'utf8');
        response.write(html);
        response.end();
    }  
});

server.listen(port, hostname, () => {
    console.log("Server running at http://web-c6edabb1d-01d1.docode.fi.qwasar.io");
});
