const fs = require('fs');

fs.readFile('text.txt','utf-8',(err,data)=>{
    if(err){
        console.error('error reading the file ',err);
    }else{
        console.log("File content : ",data)
    }
})