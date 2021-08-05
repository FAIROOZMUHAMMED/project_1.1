import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-employerlogin',
  templateUrl: './employerlogin.component.html',
  styleUrls: ['./employerlogin.component.css']
})
export class EmployerloginComponent implements OnInit {

  constructor(private _auth: AuthService,
    private _router:Router) { }
  User={
    email:'',
    password:'',
  }
  
  ngOnInit(): void {
  }
  loginUser () {
    
    this._auth.loginUser(this.User)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
        this._router.navigate(['employerhome'])
      },
      err => {
        console.log(err);
          Swal.fire("Error", "Account doesn't exists ", "error")
        this._router.navigate(['/login'])
      }
    ) 
  }

}
