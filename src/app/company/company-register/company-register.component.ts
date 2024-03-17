import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CompanyServiceService } from '../company-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-register',
  templateUrl: './company-register.component.html',
  styleUrls: ['./company-register.component.css']
})
export class CompanyRegisterComponent {
  createUser=new FormGroup({
    companyName:new FormControl(),
    location:new FormControl(),
    phone:new FormControl(),
    email:new FormControl(),
    pwd:new FormControl(),
    accNo:new FormControl(),
    registrationDate:new FormControl(),
    license:new FormControl('license')
  })

  constructor(private companyServiceService:CompanyServiceService,private router:Router){ }

  submit():void{
    this.companyServiceService.register(this.createUser.value).subscribe((val)=>{
      console.log(val)
      alert("Succesfully Registered!! We will get back to you")
      this.router.navigate(['/company-login'])
    })
  }
}
