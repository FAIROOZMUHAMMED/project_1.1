import { Component, OnInit } from '@angular/core';
import { EmployerService } from '../employer.service';
import Swal from 'sweetalert2';
import jwt_decode from "jwt-decode";
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-pwd',
  templateUrl: './update-pwd.component.html',
  styleUrls: ['./update-pwd.component.css']
})
export class UpdatePwdComponent implements OnInit {
  constructor(private employerService:EmployerService,private router: Router) { }
  Employer={
    _id:'',
    confirmpass:'',
    newpwd:'',
    againpwd:''
  }
  employerr:any;
  token:any;

  errormsg:any
  pwdSt:any
  txtcolr:any
  Emp:any;
  ngOnInit(): void {
    let employerId = localStorage.getItem("editEmployerrId");
    this.employerService.getEmployer(employerId).subscribe((data)=>{
      this.Emp=JSON.parse(JSON.stringify(data));
    
      
      this.token= localStorage.getItem('token');
      // console.log(this.token)
      this.employerr =jwt_decode(this.token);
      this.Employer._id=this.employerr.subject._id
      console.log(this.Employer._id)
  })

  }

  editEmployer()
  {  if(this.Employer.confirmpass===this.Emp.confirmpass)  {
    if (this.Employer.newpwd===this.Employer.againpwd) {
      // this.Employer._id===this.Emp.subject._id
    this.employerService.editpwd(this.Employer);   
    console.log(this.Employer)
    Swal.fire("Successfully Added", "","success");
    this.router.navigate(['/employerhome']);
    }
    else {
      Swal.fire("Error", "Passwords are mismatch ", "error")
    }
  }   else {
    Swal.fire("Error", "Plz enter old password ", "error")
  }
  }
  validatepassword(){
    var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{8,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])(?=.*\\W))|((?=.*[a-z])(?=.*[0-9])(?=.*\\W))|((?=.*[A-Z])(?=.*[a-z])(?=.*\\W))).*$", "g");
    var enoughRegex = new RegExp("(?=.{5,}).*", "g");

   if(false === enoughRegex.test(this.Employer.newpwd)){
    this.pwdSt="More character";
    this.txtcolr="text-info";
    
   }
   else if(strongRegex.test(this.Employer.newpwd)){
    this.pwdSt="Strong";
    this.txtcolr="text-success";
     
         
   }
   else if(mediumRegex.test(this.Employer.newpwd)){
    this.pwdSt="Medium";
    this.txtcolr="text-warning";
    
   }
   else{
    this.pwdSt="Poor";
    this.txtcolr="text-danger";
   
   } 
  }
}
