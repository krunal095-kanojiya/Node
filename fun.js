const http = require('http');
// Normal Function
function DataContol(req, resp) {
    resp.write("<h1>Hello HOW  im krunal kanojiya</h1>");
    resp.end();
}
http.createServer(DataContol).listen(4500);

// http.createServer((req, resp) => {
//     resp.write("<h1>Hello im krunal kanojiya</h1>");
//     resp.end();
// }).listen(4500);

// Arrow Function 

const dataCreate = (req, resp) => {
    resp.write("<h1>Hello HOW  im krunal kanojiya</h1>");
    resp.end();
}