import { UserAuthService } from 'src/app/services/user-auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserAPIService } from 'src/app/services/user-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  userLog:boolean=false;
  userEmail:string = "";
  userMobileNumber : string ="";
  userForm:FormGroup;
  constructor(private userAuthService: UserAuthService, private formBuilder: FormBuilder, private userAPIService: UserAPIService, private router: Router){
    this.userForm= this.formBuilder.group({
      email: ['',[Validators.required, Validators.pattern('[a-z0-9]+@gmail\.com')]],
      mobileNumber: ['',[Validators.required, Validators.pattern('(010|011|012)[0-9]{8}')]]
    })
  }
  ngOnInit(): void {
    this.userLog = this.userAuthService.isUserLoggedIn;
  }

  get email(){
    return this.userForm.get('email');
  }

  get mobileNumber(){
    return this.userForm.get('mobileNumber');
  }


  signIn(){
      this.userEmail = this.userForm.get('email')?.value    
      this.userMobileNumber = this.userForm.get('mobileNumber')?.value    
      if(this.userEmail&& this.userMobileNumber){
        this.userAPIService.signInUser(this.userEmail,this.userMobileNumber).subscribe({
          next:(data)=>{
            // console.log("Data:", data);
            this.userAuthService.login(this.userEmail,this.userMobileNumber);
            this.router.navigate(['/home'])
          },
          error:(err)=>{
            console.log('Error:', err)
          }
        })    
      }
    }
  

}
