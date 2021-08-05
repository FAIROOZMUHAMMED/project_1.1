import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { EmployerService } from './employer.service';
import { JobpostingService } from './jobposting.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { EmployerloginComponent } from './employerlogin/employerlogin.component';
import { EmployersignupComponent } from './employersignup/employersignup.component';
import { JobpostingComponent } from './jobposting/jobposting.component';
import { EditEmployerComponent } from './edit-employer/edit-employer.component';
import { EmployerHomeComponent } from './employer-home/employer-home.component';
import { AuthService } from './auth.service';
import { JwtModule } from "@auth0/angular-jwt";
import { JwtHelperService } from "@auth0/angular-jwt";
import { UpdatePwdComponent } from './update-pwd/update-pwd.component';
import {MatPaginatorModule} from '@angular/material/paginator';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    EmployerloginComponent,
    EmployersignupComponent,
    JobpostingComponent,
    EditEmployerComponent,
    EmployerHomeComponent,
    UpdatePwdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    JwtModule,
    MatPaginatorModule
  ],
  providers: [EmployerService,JobpostingService,AuthService,JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
