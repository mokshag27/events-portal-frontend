import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
  createUser=new FormGroup({
    name:new FormControl(),
    username:new FormControl(),
    phone:new FormControl(),
    email:new FormControl(),
    pwd:new FormControl(),
    dob:new FormControl()
  })

  constructor(private authServiceService:AuthServiceService,private router:Router){ }

  submit():void{
    this.authServiceService.register(this.createUser.value).subscribe((val)=>{
      
      console.log(val)
      if(val===1){
        this.router.navigate(['login'])
      }
      else{
        console.log("Wrong credentials")
        alert("Wrong credentials")
      }
    })
  }

}
