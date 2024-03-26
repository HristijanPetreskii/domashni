const fs=require('fs');

const write="print this message!";
fs.writeFile('text2.txt',write,(err)=>{
    if(err){
        console.error("Error message! ",err);
    }else{
        console.log("File is writen");
    }
});



