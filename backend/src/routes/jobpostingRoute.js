const express = require('express');
const JobRouter = express.Router(); 
const Jobdata= require('../model/Jobposting');

JobRouter.post('/',function(req,res){
    res.header("Access-Control-Allow-Orgin","*")
    res.header('Access-Control-Allow-Methods: GET,POST, PATCH , PUT, DELETE,OPTIONS');
    console.log(req.body);
    var Job ={
        jobtitle : req.body.job.jobtitle,
        company : req.body.job.company,
        requirements: req.body.job.requirements,
        joblocation:req.body.job.joblocation,
        exdate:req.body.job.exdate,
        qualification:req.body.job.qualification,
        type:req.body.job.type,
        nojobs:req.body.job.nojobs,
        email:req.body.job.email,
        description:req.body.job.description
    }
    var Job =new Jobdata(Job);
    Job.save();
  });

  module.exports = JobRouter;