const express =require('express')//function
const app =express();//module
const apiRouter =require('./router/api.js');
app.use(express.json());// to convert data into JSON format;
const mongoose =require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/mr10api',()=>{
    console.log("connected to DB mr10API....");
});


app.use('/api',apiRouter);
app.listen(5000,()=>{
    console.log('server is running on port 5000');
});