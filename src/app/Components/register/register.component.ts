import { AdminAPIService } from './../../services/admin-api.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Iadmin } from 'src/app/Models/iadmin';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private adminAPIService:AdminAPIService, private router: Router){}
  admin:Iadmin = {} as Iadmin;
  register(){
  //   let admin: Iadmin={
  //     id: 2,
  //     firstName:"Ahmed",
  //     lastName:"Ali",
  //     email:'ahmed@gmail.com',
  //     password:"123456"
  //   };
        
    this.adminAPIService.signUpAdmin(this.admin).subscribe({
      next:(data)=>{
        console.log("Data:", data);
        this.router.navigate(['/home'])
      },
      error:(err)=>{
        console.log('Error:', err)
      }
    })    
  }
}
