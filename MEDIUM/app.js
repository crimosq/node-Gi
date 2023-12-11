//importing the fileSystem module
const fs = require('fs');


//reading the  file
fs.readFile('planets.txt','utf8', function (err, data) { 
    

    //checks for Errors
    if (err) {
        console.error("Error:", err);
        return;
    }

    console.log(data) 
  });

