console.log("hello from nodejs");

var http = require('http');
var ct = require('./myfirstmodule');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello World!');
}).listen(8080);

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("The date and time are currently: " + ct.myDateTime());
    res.end();
}).listen(8081);

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    //Return the url part of the request object:
    res.write(req.url);
    res.end();
}).listen(8082);

// read file
var fs = require('fs');
http.createServer(function (req, res) {
    fs.readFile('index.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(8083);

//create file
var fs = require('fs');

// fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
// });

// fs.open('mynewfile2.txt', 'w', function (err, file) {
//   if (err) throw err;
//   console.log('Saved file!');
// });


fs.writeFile('mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});

// update file
fs.appendFile('mynewfile1.txt', 'This is my text', function (err) {
    if (err) throw err;
    console.log('Replaced!');
});

//delete file
// fs.unlink('mynewfile1.txt', function (err) {
//     if (err) throw err;
//     console.log('File deleted!');
//   });

//file rename()
// fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
//     if (err) throw err;
//     console.log('File Renamed!');
//   });

//The Built-in URL Module
var url = require('url');
var adr = 'http://localhost:8084/default.htm?year=2017&month=february';
var q = url.parse(adr, true);             //The URL module splits up a web address into readable parts.

console.log(q.host);     //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search);   //returns '?year=2017&month=february'

var qdata = q.query;      //returns an object: { year: 2017, month: 'february' }
console.log(qdata.month); //returns 'february'

// NPM 
var uc = require('upper-case');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(uc.upperCase("Hello World!"));
    res.end();
}).listen(8085);

// events
var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
    console.log('I hear a scream!');
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');
