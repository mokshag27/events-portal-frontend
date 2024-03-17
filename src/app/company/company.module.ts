import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyLoginComponent } from './company-login/company-login.component';
import { CompanyRegisterComponent } from './company-register/company-register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    CompanyLoginComponent,
    CompanyRegisterComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    CompanyRegisterComponent,
    CompanyLoginComponent
  ]
})
export class CompanyModule { }
