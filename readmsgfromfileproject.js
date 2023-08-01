const http = require('http'); // Import the 'http' module to create an HTTP server
const fs = require('fs'); // Import the 'fs' module to work with the file system
const path = require('path'); // Import the 'path' module to handle file paths
const qs = require('querystring'); // Import the 'querystring' module to parse form data

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // Read the content of the message.txt file (if exists) using a stream
        const readStream = fs.createReadStream('message.txt', 'utf8');
        let previousMessage = '';

        // Handle data events from the stream
        readStream.on('data', (chunk) => {
            previousMessage += chunk;
        });

        // Handle the end event to send the response after reading the file
        readStream.on('end', () => {
            // Display the form
            res.setHeader('Content-Type', 'text/html');
            res.write('<!DOCTYPE html><html><head><title>Text File Creation</title></head><body>');
            res.write('<div id="messageDisplay">');
            if (previousMessage) {
                // If previous message exists, display it at the top
                res.write('<p><strong>Previous Message:</strong></p>');
                res.write('<pre>' + previousMessage + '</pre>');
            }
            res.write('</div>');
            res.write('<form id="messageForm" action="/message" method="POST">');
            res.write('<input type="text" name="message" id="messageInput">');
            res.write('<button type="submit">SEND</button>');
            res.write('</form>');
            res.write('<script>');
            res.write(`
                // JavaScript code to handle form submission
                const form = document.getElementById('messageForm');
                form.onsubmit = function (event) {
                    event.preventDefault();
                    const messageInput = document.getElementById('messageInput');
                    const message = messageInput.value;
                    fetch('/message', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                        body: 'message=' + encodeURIComponent(message)
                    })
                    .then(() => {
                        // Redirect back to the root page after a short delay
                        window.location.href = '/';
                    })
                    .catch(err => {
                        console.error('Error sending the message:', err);
                    });
                };
            `);
            res.write('</script>');
            res.write('</body></html>');
            return res.end(); // Return the response to the client and end the response process
        });

        // Handle errors during file read
        readStream.on('error', (err) => {
            if (err.code === 'ENOENT') {
                // If file not found, continue to send the response without previousMessage
                res.statusCode = 200;
                return res.end();
            } else {
                // For other errors, send 500 Internal Server Error
                res.statusCode = 500;
                return res.end('Internal Server Error');
            }
        });
    } else if (req.url === '/message' && req.method === 'POST') {
        // Handle form submission and write the message to the file

        // Read the form data from the request
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const parsedBody = qs.parse(body);
            const message = parsedBody.message;

            // Write the message to the message.txt file using a stream
            const writeStream = fs.createWriteStream('message.txt', { flags: 'w' });
            writeStream.write(message, 'utf8');
            writeStream.end();

            // Redirect back to the root page
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    } else {
        // For any other route, return a 404 Not Found response
        res.statusCode = 404;
        res.end('Not Found');
    }
});

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