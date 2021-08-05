import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {

  employeritem={
    firstname:'',
    lastname:'',
    company:'',
    jobtitle:'',
    email:'',
    password:'',
    confirmpass:''
}
  constructor(private http:HttpClient) { }
  newUser(employeritem:any)
  {   
    return this.http.post("http://localhost:3400/employer/signup",{"employer":employeritem})
    .subscribe(data =>{console.log(data)})
  }
  getEmployer(id:any){
    return this.http.get("http://localhost:3400/employer/"+id);
  }
  getEmployers(){
    return this.http.get("http://localhost:3400/employer");
  }
  editEmplo(employerdata:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:3400/employer/edit",employerdata)
    .subscribe(data =>{console.log(data)})
  }
  editpwd(employerdata:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:3400/employer/editpwd",employerdata)
    .subscribe(data =>{console.log(data)})
  }


}
