const http = require('http');




const server = http.createServer((req,res)=>{
    // Get the URL path without query parameters
  const url = req.url.split('?')[0];

  // Route handling based on the URL path
  if (url === '/home') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome home');
  } else if (url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to About Us page');
  } else if (url === '/node') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to my Node.js project');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 - Page Not Found');
  }
})



server.listen(4000, () => {
  console.log(`Server running on port 4000`);
});