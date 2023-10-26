import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';
import { ICategories } from 'src/app/Models/icategories';
import { DiscountOffers } from 'src/app/Models/discount-offers';
import { Store } from 'src/app/Models/store';
import { Card } from 'src/app/Models/card';
import { ProductServicesService } from 'src/app/services/product-services.service'
import { CategoryAPIService } from 'src/app/services/category-api.service';
import { ProductAPIService } from 'src/app/services/product-api.service';
import { identifierName } from '@angular/compiler';
import { UserAuthService } from 'src/app/services/user-auth.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit{
  sizeOfCard: number = 0;
  isLogged:boolean = false;
  constructor(private router: Router ,public PServices:ProductServicesService, public PApiService: ProductAPIService, public userAuth :UserAuthService){
    let tenPercent: string = PServices.tenPercent;
    // this.isLogged= this.userAuth.isUserLoggedIn;
  }
  
  ngOnInit(): void {
    this.PApiService.getAllProducts().subscribe(
      data =>{
        this.PApiService.filteredProducts = data;
      }
    )
    this.isAdminLoggedIn()
    // this.userAuth.getUserStatus().subscribe({
    //   next:(user)=>{
    //     this.isLogged=user
    //   },
    //   error:(error)=>{
    //     console.log(error);          
    //   }
    // })
  }
  
  // addToCard(item: IProduct,count: string){
  //   this.sizeOfCard += parseInt(count);
  // }

  isAdminLoggedIn(){
    let token =localStorage.getItem('token')      
    if(token && token.includes("admin")){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  deleteProduct(id: number){
    console.log(id);
    this.PApiService.deleteProduct(id).subscribe({
      next:(data)=>{
        console.log("Data:", data);
        this.router.navigate(['/products'])  
      },
      error:(err)=>{
        console.log('Error:', err)
      }
    })
  }
  
}
