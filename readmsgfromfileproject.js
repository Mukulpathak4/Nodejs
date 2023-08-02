const http = require('http'); // Import the 'http' module to create an HTTP server

const routes = require('./routes');

const server = http.createServer(routes);

server.listen(5000, () => {
    console.log("Server running at http://localhost:5000");
});




//Detailed comments for each part:

//When a request is made to the root page '/', the server reads the content of the message.txt file (if it exists) 
//using the fs.createReadStream method. We use a stream to efficiently handle the reading of large files.

//We define the previousMessage variable to store the content of the message.txt file as it is being read.

//The stream listens for 'data' events and appends each data chunk to the previousMessage variable.

//When the reading is complete (i.e., the 'end' event is emitted by the stream), 
//the server sends an HTML response to the client with the form and the content of the message.txt file displayed at 
//the top of the input field.

//If the file is empty or doesn't exist (e.g., file not found error), 
//the server continues to send the response without displaying the previousMessage.

//When the form is submitted (POST request to /message), the server handles 
//the form data using the req.on('data') and `req.on('