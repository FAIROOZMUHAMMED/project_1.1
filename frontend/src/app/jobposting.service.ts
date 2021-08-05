import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobpostingService {

  jobitem={
    jobtitle:'',
    company:'',
    requirements:'',
    joblocation:'',
    exdate:'',
    qualification:'',
    type:'',
    nojobs:'',
    email:'',
    description:''
}
  constructor(private http:HttpClient) { }
  newPost(jobitem:any)
  {   
    return this.http.post("http://localhost:3000/jobposting",{"job":jobitem})
    .subscribe(data =>{console.log(data)})
  }
}
