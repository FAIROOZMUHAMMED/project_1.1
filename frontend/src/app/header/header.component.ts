import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { EmployerService } from '../employer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _auth:AuthService,
    private _router:Router,private employerService:EmployerService) { }
logoutUser()
{
localStorage.removeItem('token')
this._router.navigate([''])
}
  ngOnInit(): void {

  }

}
