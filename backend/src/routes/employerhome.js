const express = require('express');
const Employerhome = express.Router(); 
const Employerdata= require('../model/Employerdata');

// Employerhome.get('/',function(req,res){
//     // res.header("Access-Control-Allow-Orgin","*")
//     // res.header('Access-Control-Allow-Methods: GET,POST, PATCH , PUT, DELETE,OPTIONS');
//     Employerdata.find()
//        .then(function(employers){
//         res.send(employers);
//     });
// })

module.exports = Employerhome;