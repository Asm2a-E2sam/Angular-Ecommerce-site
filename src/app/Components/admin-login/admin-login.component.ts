import { UserAuthService } from 'src/app/services/user-auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminAPIService } from 'src/app/services/admin-api.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {
  userLog:boolean=false;
  adminEmail:string = "";
  userPassword : string ="";
  userForm:FormGroup;
  constructor(private userAuthService: UserAuthService, private formBuilder: FormBuilder, private adminAPIService: AdminAPIService, private router: Router){
    this.userForm= this.formBuilder.group({
      email: ['',[Validators.required]],
      password: ['',[Validators.required]]
    })
  }
  ngOnInit(): void {
    this.userLog = this.userAuthService.isUserLoggedIn;
  }

  get email(){
    return this.userForm.get('email');
  }

  get password(){
    return this.userForm.get('password');
  }


  signIn(){
    this.adminEmail = this.userForm.get('email')?.value    
    this.userPassword = this.userForm.get('password')?.value    
    if(this.adminEmail&& this.userPassword){
      this.adminAPIService.signInAdmin(this.adminEmail,this.userPassword).subscribe({
        next:(data)=>{
          // console.log("Data:", data);
          this.userAuthService.adminLogin(this.adminEmail,this.userPassword);
          this.router.navigate(['/home'])
        },
        error:(err)=>{
          console.log('Error:', err)
        }
      })    
    }
  }

}
