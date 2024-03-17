import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  login=new FormGroup({
    username:new FormControl(),
    pwd:new FormControl(),
  })

  constructor(private authServiceService:AuthServiceService,private router:Router,private cookieservice:CookieService){ }

  submit():void{
    this.authServiceService.login(this.login.value).subscribe((val)=>{
      console.log(val)
      if(val.ValidYN===1){
        this.cookieservice.set("userName",val.username);
        this.cookieservice.set("fullName",val.fullname);
        this.cookieservice.set("email",val.email);
        this.cookieservice.set("dob",val.dob);
        this.cookieservice.set("user_id",val.user_id);
        this.cookieservice.set("token",val.token)
        // this.router.navigate(['notes'])
      }
    })
  }
}
