import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import * as moment from 'moment';
import { JobpostingService } from '../jobposting.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobposting',
  templateUrl: './jobposting.component.html',
  styleUrls: ['./jobposting.component.css']
})
export class JobpostingComponent implements OnInit {

  constructor(private jobpostingService:JobpostingService,private router: Router) { }
  Jobpost={
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
  minDate = moment(new Date()).format('YYYY-MM-DD')
  ngOnInit(): void {
  }
  userVerify()
  {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Post it!'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(this.Jobpost);
        this.jobpostingService.newPost(this.Jobpost);
        Swal.fire(
          'Success!',
          '',
          'success'
        )
        this.router.navigate(['']);
      }
    })
    
  }
}
