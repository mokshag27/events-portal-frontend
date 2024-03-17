import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CompanyServiceService } from '../company-service.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-company-login',
  templateUrl: './company-login.component.html',
  styleUrls: ['./company-login.component.css']
})
export class CompanyLoginComponent {
  login=new FormGroup({
    email:new FormControl(),
    pwd:new FormControl(),
  })

  constructor(private companyServiceService:CompanyServiceService,private router:Router,private cookieservice:CookieService){ }

  submit():void{
    this.companyServiceService.login(this.login.value).subscribe((val)=>{
      console.log(val)
      if(val.ValidYN===1){
        this.cookieservice.set("companyName",val.company_name);
        this.cookieservice.set("location",val.location);
        this.cookieservice.set("email",val.email);
        this.cookieservice.set("company_id",val.company_id);
        // this.router.navigate(['notes'])
      }
    })
  }
}
