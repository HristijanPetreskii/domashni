const express=require('express');
const app=express();
const port=5000;

app.get('/',(req,res)=>{
     res.send("Hello students of semos!");
});

app.get('/home',(req,res)=>{
    res.send("Hello world!");
});

app.get('/hello/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello, ${name}!`);
  });