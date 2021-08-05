const express = require('express');
const EmployerloginRouter = express.Router(); 
const jwt = require('jsonwebtoken');
const Employerdata= require('../model/Employerdata');



EmployerloginRouter.post('/',(req,res)=>{
    res.header("Access-Control-Allow-Orgin","*")
    res.header('Access-Control-Allow-Methods: GET,POST, PATCH , PUT, DELETE,OPTIONS');
  let password = req.body.password;
  let email = req.body.email;

  Employerdata.findOne({"email":email})
  .then(function(Userdat){
    if (  email === Userdat?.email && password === Userdat?.confirmpass ) {
         let id=Userdat._id;
        let payload = {subject: Userdat}
        let token = jwt.sign(payload, 'secretKey')
        res.status(200).send({token})
      } 
      else 
       {
        res.status(401).send('Invalid Password or Invalid Password')
      } 
})

})

module.exports = EmployerloginRouter;