//first import http module which is builtin node js module that provides
//functinality for creating http server and handling http server request and response
const http = require('http');

//Now we define port number 
const port = 4000;
const yourName = 'Mukul Pathak';

//Now created http server using create server method the function we pass as an argument will be executed when request is made to the server
//http.createServer((req, res) => { ... }): This line creates a server that listens for incoming HTTP requests. When a request arrives,
// the server will execute the code inside the curly braces { ... }.
//res.writeHead(200, { 'Content-Type': 'text/plain' });: This line sets the response's status code to 200, which means "OK"
// It also sets the content type of the response to "text/plain",// indicating that the response will be plain text.
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(yourName);
});

//Starting the server and listening for incoming request
//Finally, we start the server and make it listen on the specified port using the listen method.
// The server will keep running and wait for incoming HTTP requests. 
//When the server is up and running, the listen method's callback function is executed, and the message 
//'Server running on port 4000' is logged to the console.
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

//<p>Want to quit your running Node.js server?</p><p>You can always do that by pressing
// <code>CTRL + C</code> in the terminal/ command prompt window where you started your server
// (i.e. where you ran <code>node app.js</code>).