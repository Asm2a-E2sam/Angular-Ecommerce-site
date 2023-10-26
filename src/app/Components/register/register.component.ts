import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  userForm: FormGroup;

  constructor(private adminAPIService: AdminAPIService, private userAPIService:UserAPIService, private router: Router, private formBuilder: FormBuilder){
    this.userForm = new FormGroup({
      fullName:new FormControl('',[Validators.required, Validators.minLength(5)]),
      email: new FormControl('',[Validators.required, Validators.pattern('[a-z0-9]+@gmail\.com')]),
      mobileNumber: new FormControl('',[Validators.required, Validators.pattern('(010|011|012)[0-9]{8}')])
    })
  }

  get fullName(){
    return this.userForm.get('fullName');
  }

  get email(){
    return this.userForm.get('email');
  }

  get mobileNumber(){
    return this.userForm.get('mobileNumber');
  }

  user:IUser = {} as IUser;
  registerAsUser(){
  //   let user:IUser ={
  //     id: 2,
  //     fullName:"Ahmed",
  //     email:'ahmed@gmail.com',
  //     mobileNumber:"01012345678"
  //   };
  // console.log(this.userForm.get('email')?.value);
    this.user.fullName = this.userForm.get('fullName')?.value    
    this.user.email = this.userForm.get('email')?.value    
    this.user.mobileNumber = this.userForm.get('mobileNumber')?.value    
    if(this.user.fullName&& this.user.email && this.user.mobileNumber){
      this.userAPIService.signUpUser(this.user).subscribe({
        next:(data)=>{
          console.log("Data:", data);
          this.router.navigate(['/user/login'])
        },
        error:(err)=>{
          console.log('Error:', err)
        }
      })    
    }
  }

  // admin:Iadmin = {} as Iadmin;
  // registerAsAdmin(){
  // //   let admin: Iadmin={
  // //     id: 2,
  // //     firstName:"Ahmed",
  // //     lastName:"Ali",
  // //     email:'ahmed@gmail.com',
  // //     password:"123456"
  // //   };
        
  //   this.adminAPIService.signUpAdmin(this.admin).subscribe({
  //     next:(data)=>{
  //       console.log("Data:", data);
  //       this.router.navigate(['/home'])
  //     },
  //     error:(err)=>{
  //       console.log('Error:', err)
  //     }
  //   })    
  // }


  // switchToAdmin(){
  //   this.isUser =false;
  //   this.router.navigate(['/admin/register'])
  // }

  // switchToUser(){
  //   this.isUser =true;
  //   this.router.navigate(['/user/register'])
  // }
}
