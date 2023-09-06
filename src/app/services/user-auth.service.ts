import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  isLogBehavior:BehaviorSubject<boolean>;
  constructor() {
    this.isLogBehavior=new BehaviorSubject<boolean>(this.isUserLoggedIn) 
   }

   login(email:string, password:string){
    let userToken= email + 'user'
    localStorage.setItem('token',userToken)
    this.isLogBehavior.next(true)
   }

   adminLogin(email:string, password:string){
    let userToken= email + 'admin'
    localStorage.setItem('token',userToken)
    this.isLogBehavior.next(true)
   }

   logout(){
    localStorage.removeItem('token')
    this.isLogBehavior.next(false)
   }

   get isUserLoggedIn():boolean{
    return (localStorage.getItem('token'))?true:false
  }

   getUserStatus():Observable<boolean>{
    return this.isLogBehavior.asObservable();
   }

}
