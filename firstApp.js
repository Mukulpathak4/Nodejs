console.log("Hello this is first in node js");


const fs =  require('fs');

fs.writeFileSync('Hello.txt' , 'Console.log("This file is created through another js file")');