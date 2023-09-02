import { AdminAPIService } from './../../services/admin-api.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Iadmin } from 'src/app/Models/iadmin';
import { IUser } from 'src/app/Models/iuser';
import { UserAPIService } from 'src/app/services/user-api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  isUser:boolean =true;

  constructor(private userAPIService:UserAPIService, private router: Router){}
  user:IUser = {} as IUser;
  register(){
  //   let admin: Iadmin={
  //     id: 2,
  //     firstName:"Ahmed",
  //     lastName:"Ali",
  //     email:'ahmed@gmail.com',
  //     password:"123456"
  //   };
        
    this.userAPIService.signUpUser(this.user).subscribe({
      next:(data)=>{
        console.log("Data:", data);
        this.router.navigate(['/home'])
      },
      error:(err)=>{
        console.log('Error:', err)
      }
    })    
  }

  switchToAdmin(){
    this.isUser =false;
    this.router.navigate(['/admin/register'])
  }
}
