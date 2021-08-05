const express = require('express');
const EmployersignupRouter = express.Router(); 
const Employerdata= require('../model/Employerdata');
const jwt = require('jsonwebtoken');
//   // display
  EmployersignupRouter.get('/',function(req,res){
    // res.header("Access-Control-Allow-Orgin","*")
    // res.header('Access-Control-Allow-Methods: GET,POST, PATCH , PUT, DELETE,OPTIONS');
    Employerdata.find()
       .then(function(employers){
        res.send(employers);
    });
})

EmployersignupRouter.post('/signup',function(req,res){
    res.header("Access-Control-Allow-Orgin","*")
    res.header('Access-Control-Allow-Methods: GET,POST, PATCH , PUT, DELETE,OPTIONS');
    // console.log(req.body);
    var Employer ={
        firstname : req.body.employer.firstname,
        lastname: req.body.employer.lastname,
        company : req.body.employer.company,
        jobtitle:req.body.employer.jobtitle,
        nojobs:req.body.employer.nojobs,
        email:req.body.employer.email,
        confirmpass:req.body.employer.confirmpass,
    }
    var Employer =new Employerdata(Employer);
    Employer.save();
  });


// Employer
EmployersignupRouter.get('/:id',  (req, res) => {
  
    const id = req.params.id;
    Employerdata.findOne({"_id":id})
      .then((employer)=>{
          res.send(employer);
      });
  })

//Edit 
  EmployersignupRouter.put('/edit',function(req,res){
    console.log(req.body)
  

    id=req.body._id,
    firstname = req.body.firstname,
    lastname = req.body.lastname,
    company = req.body.company,
    jobtitle = req.body.jobtitle,
    nojobs=req.body.nojobs,
    email = req.body.email,
  
    Employerdata.findByIdAndUpdate({"_id":id},
                                {$set:{"firstname":firstname,
                                "lastname":lastname,
                                "company":company,
                                "jobtitle":jobtitle,
                                "nojobs":nojobs,
                                "email":email,
                               
                                }})
   .then(function(){
       res.send();
   })
  });

  //Edit Password
  EmployersignupRouter.put('/editpwd',function(req,res){
    console.log(req.body)
  

    id=req.body._id,

    confirmpass = req.body.confirmpass
    newpwd = req.body.newpwd,
    Employerdata.findByIdAndUpdate({"_id":id},
                                {$set:{
                                "confirmpass":newpwd 
                                }})
   .then(function(){
       res.send();
   })
  });

  module.exports = EmployersignupRouter;