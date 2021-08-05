import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployerService } from '../employer.service';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';
import { getMissingNgModuleMetadataErrorData, ThisReceiver } from '@angular/compiler';





@Component({
  selector: 'app-edit-employer',
  templateUrl: './edit-employer.component.html',
  styleUrls: ['./edit-employer.component.css']
})
export class EditEmployerComponent implements OnInit {
  constructor(private employerService:EmployerService,private router: Router,
   
    ) { }
    
 
  Employer={
    firstname:'',
    lastname:'',
    company:'',
    jobtitle:'',
    email:'',

  }
  employerr:any;
  token:any;

  errormsg:any
  pwdSt:any
  txtcolr:any


  ngOnInit(): void {
    let employerId = localStorage.getItem("editEmployerId");
    this.employerService.getEmployer(employerId).subscribe((data)=>{
      this.Employer=JSON.parse(JSON.stringify(data));
    
 
  })

  }
  
  onChange(newValue:any){
    console.log(newValue)
  }
  editEmployer()
  { 
   
    this.employerService.editEmplo(this.Employer);   
    console.log(this.Employer)
    Swal.fire("Successfully Updated", "","success");
    this.router.navigate(['/employerhome']);
    
  }

}
