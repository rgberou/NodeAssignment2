const http=require('http');
const path=require('path');
const bodyParser=require('body-parser')
const express=require('express');
const app=express();


app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));
app.use('/',(req,res,err)=>{
	res.send("Hello World")
});

app.use((req,res,err)=>{
	res.status(404).send('<h1>Page not found</h1>');
});


app.listen(30001)
