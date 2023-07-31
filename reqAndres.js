const http = require('http');




const server = http.createServer((req,res)=>{
    console.log(req.headers,req.method,req.url);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head></head>')
    res.write('<body><h1>Welcome to my Node Js project</h1></body>')
    res.write('</html>');
    res.end();
})



server.listen(4000, () => {
  console.log(`Server running on port 4000`);
});