import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppliedListComponent } from './applied-list/applied-list.component';
import { EditEmployerComponent } from './edit-employer/edit-employer.component';
import { EmployerHomeComponent } from './employer-home/employer-home.component';
import { EmployerloginComponent } from './employerlogin/employerlogin.component';
import { EmployersignupComponent } from './employersignup/employersignup.component';
import { HomComponent } from './hom/hom.component';
import { HomeComponent } from './home/home.component';
import { JobpostingComponent } from './jobposting/jobposting.component';
import { UpdatePwdComponent } from './update-pwd/update-pwd.component';


const routes: Routes = [
  {
    path:"",component:HomeComponent},
 
      {
        path:"employerlogin",component:EmployerloginComponent
      },
      {
        path:"employer/signup",component:EmployersignupComponent
      },
      {
        path:"jobposting",component:JobpostingComponent
      },
      {
        path:"employerhome",component:EmployerHomeComponent,
        children:[
          {
            path:"employer/edit",component:EditEmployerComponent
          },
          {
            path:"employer/updatepwd",component:UpdatePwdComponent
          },
          {
            path:"",component:HomComponent
          }
        ]
      },
      // {
      //   
      // },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
