import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/Models/store';
import { UserAuthService } from 'src/app/services/user-auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    store:Store = new Store("Buma",["Cairo"],"https://i.postimg.cc/BvKw80Bx/favicon.png")

    isAdmin:boolean=false;
    isUserLogged:boolean;
    constructor(private userAuth: UserAuthService){
      this.isUserLogged= this.userAuth.isUserLoggedIn;
    }

    ngOnInit(): void {
      this.userAuth.getUserStatus().subscribe({
        next:(user)=>{
          this.isUserLogged=user
        },
        error:(error)=>{
          console.log(error);          
        }
      })
    }

    get isAdminLoggedIn():boolean{
      let token =localStorage.getItem('token')      
      return (token && token.includes("admin"))?true:false
    }
}



