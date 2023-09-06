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
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit{
  sizeOfCard: number = 0;
  constructor(public PServices:ProductServicesService, public PApiService: ProductAPIService){
    let tenPercent: string = PServices.tenPercent;
  }
  
  ngOnInit(): void {
    this.PApiService.getAllProducts().subscribe(
      data =>{
        this.PApiService.filteredProducts = data;
      }
    )
  }
  
  addToCard(item: IProduct,count: string){
    this.sizeOfCard += parseInt(count);
  }

  get isAdminLoggedIn():boolean{
    let token =localStorage.getItem('token')      
    return (token && token.includes("admin"))?true:false
  }

  deleteProduct(id: number){
    console.log(id);
    this.PApiService.deleteProduct(id).subscribe({
      next:(data)=>{
        console.log("Data:", data);
        
      },
      error:(err)=>{
        console.log('Error:', err)
      }
    })
  }

  
}
