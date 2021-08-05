const express = require('express');
var cors = require('cors');
var app = new express();
app.use(cors());
app.use(express.json());



const employersignupRouter = require('./src/routes/employersignupRoute');
const jobpostingRouter = require('./src/routes/jobpostingRoute');
const employerloginRouter = require('./src/routes/employerloginRoute');
const employerhomeRouter = require('./src/routes/employerhome');

app.use(express.urlencoded({extended:true}));
app.use('/employerlogin',employerloginRouter);
app.use('/employer',employersignupRouter);
app.use('/jobposting',jobpostingRouter);
app.use('/employerhome',employerhomeRouter);


app.listen(3400,()=>{
    console.log("Server Ready at : 3400");
});