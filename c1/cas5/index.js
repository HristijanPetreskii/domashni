const http = require("http");
const url = require("url");
const fs = require("fs");


const server = http.createServer((request, response) => {
    const url = request.url; 
    const method = request.method; 
    

    if(url === "/name"){ 
        response.write("<html><head><title>Name</title></header>");
        response.write("My name is Hristijan");
        response.write("</html>");
    } 

    if(url === "/surname"){
        response.write("<html><header>Surname</header>");
        response.write("My surname is Petreski");
        response.write("</html>");
    }

    if(url === "/year"){
        response.write("<html><header>Year</header>");
        console.log("I was born 2002");
        response.write("</html>");
        
    }


    return response.end();
});

server.listen(8000);