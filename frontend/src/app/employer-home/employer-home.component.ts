import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EmployerService } from '../employer.service';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-employer-home',
  templateUrl: './employer-home.component.html',
  styleUrls: ['./employer-home.component.css']
})
export class EmployerHomeComponent implements OnInit {


  Employer={
    firstname:'',
    lastname:'',
    company:'',
    jobtitle:'',
    email :'',
    confirmpass:''
  }
  employer={
    _id:''
  }


  sub:any;
  constructor(private employerService:EmployerService,private router: Router,private rout:ActivatedRoute) { }
  employerr:any;
  token:any;
  ngOnInit(): void {
    this.token= localStorage.getItem('token');
      // console.log(this.token)
      this.employerr =jwt_decode(this.token);
      this.employer._id=this.employerr.subject._id
      console.log(this.employer._id)

      this.employerService.getEmployer(this.employer._id).subscribe((data)=>{
        this.Employer=JSON.parse(JSON.stringify(data));
        console.log(this.Employer)
    })
}

  editEmployer(employerdata:any)
  {
    localStorage.setItem("editEmployerId",  employerdata._id);
    this.router.navigate(['employerhome/employer/edit']);
  }
  editEmployerpwd(employerdata:any)
  {
    localStorage.setItem("editEmployerrId",  employerdata._id);
    this.router.navigate(['employerhome/employer/updatepwd']);
  }
}
