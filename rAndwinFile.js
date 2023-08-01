// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req,res)=>{
//     const url = req.url;
//     const method = req.method;
//     if(url==='/')
//     {
//         res.write('<html>')
//         res.write('<head><title>Enter Message</title></head>')
//         res.write('<body><h1>This is to Learn how to read and write in a file in js</h1><form action="/meassage" method="POST"><input type="text" name="mes"></input><button type="submit">SEND</button></form></body>')
//         res.write('</html>')
//         return res.end();
//     }
//     if(url==='/message' && method==='POST')
//     {
//         fs.writeFileSync('message.txt','Dummy');
//         res.statusCode = 302;
//         res.setHeader('Location' ,'/');
//         return res.end();
//     }
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head></head>')
//     res.write('<body><h1>Welcome to my Node Js project</h1></body>')
//     res.write('</html>');
//     res.end();
// })

// server.listen(3004);


const http = require('http'); // Import the 'http' module to create an HTTP server
const fs = require('fs'); // Import the 'fs' module to work with the file system

const server = http.createServer((req, res) => {
  const url = req.url; // Get the requested URL from the request object
  const method = req.method; // Get the HTTP method (e.g., GET, POST) from the request object

  if (url === '/') {
    // If the requested URL is '/', this is the root page
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write(
      '<body><h1>This is to Learn how to read and write in a file in js</h1><form action="/message" method="POST"><input type="text" name="message"></input><button type="submit">SEND</button></form></body>'
    );
    res.write('</html>');
    return res.end(); // Return the response to the client and end the response process
  }

  if (url === '/message' && method === 'POST') {
    // If the requested URL is '/message' and the method is POST (i.e., form submission)
    const body = [];
    req.on('data', (chunk) => {
      // Listen for incoming data chunks and store them in the 'body' array
      body.push(chunk);
    });
    req.on('end', () => {
      // When all data has been received
      const parsedBody = Buffer.concat(body).toString(); // Concatenate the data chunks and convert to a string
      const message = parsedBody.split('=')[1]; // Extract the message from the form input
      fs.writeFileSync('message.txt', message); // Write the message to the 'message.txt' file
      res.statusCode = 302; // Set the status code to 302 (Found/Redirect)
      res.setHeader('Location', '/'); // Set the 'Location' header to redirect to the root page ('/')
      return res.end(); // Return the response to the client and end the response process
    });
  } else {
    // For any other URL or method combination, display the welcome message
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head></head>');
    res.write('<body><h1>Welcome to my Node Js project</h1></body>');
    res.write('</html>');
    res.end(); // Return the response to the client and end the response process
  }
});

server.listen(3000); // Start the server and make it listen on port 3000




//Buffers and streams are important concepts in Node.js that serve different purposes:

//Buffers:

//Buffers are used to work with binary data in Node.js.
//They are essentially chunks of memory allocated outside the V8 JavaScript engine that can store raw binary data 
//(like images, audio, video, etc.).
//Buffers are useful when you need to read or write binary data directly, 
//such as when working with files, network sockets, or cryptography.
//They provide a way to handle binary data efficiently without needing to manipulate individual bytes.
//Common use cases include reading and writing files, 
//handling binary data during network communication, or working with encrypted data.
//Streams:

//Streams are used to handle data that is read or written in chunks, 
//allowing you to process large amounts of data efficiently, without consuming excessive memory.
//They provide a way to handle data incrementally as it becomes available, rather than loading the entire dataset into memory.
//Streams can be used for both reading and writing data.
//In Node.js, there are four types of streams: Readable, Writable, Duplex, and Transform.
//Examples of streams include reading a large file line-by-line, 
//downloading large files from a server, or compressing data on the fly during transmission.
//Streams are particularly useful for dealing with real-time data, 
//such as streaming media, or handling data from multiple sources concurrently.
//When to use Buffers:

//When working with binary data directly, like reading or writing files, handling network communication, or cryptographic operations.
//When you need to manipulate raw binary data efficiently and directly in Node.js.
//When to use Streams:

//When you want to handle large amounts of data efficiently without consuming excessive memory.
//When you are dealing with data that can be processed incrementally or in chunks, 
//such as reading large files, streaming media, or working with real-time data sources.
//When you need to process data in a non-blocking manner, which is crucial for building scalable and performant applications.
//In summary, use buffers for direct manipulation of binary data, 
//and use streams to handle large datasets efficiently and process data incrementally without loading everything into memory at once.
// Both Buffers and Streams are essential tools when building high-performance, scalable, and memory-efficient applications in Node.js.