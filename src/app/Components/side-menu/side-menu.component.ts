import { Component, OnInit,OnChanges, Input } from '@angular/core';
import { Card } from 'src/app/Models/card';
import { DiscountOffers } from 'src/app/Models/discount-offers';
import { ICategories } from 'src/app/Models/icategories';
import { IProduct } from 'src/app/Models/iproduct';
import { Store } from 'src/app/Models/store';
import { ProductAPIService } from 'src/app/services/product-api.service';
import { ProductServicesService } from 'src/app/services/product-services.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  // products: IProduct[]= [];
  // filteredProducts:IProduct[]=[];
  categories: ICategories[] = [];

  constructor(public PServices:ProductServicesService, public PApiService: ProductAPIService) {
    this.categories=PServices.categories
    // this.products=PServices.products  
  }

  ngOnInit(): void {
    // this.filteredProducts=this.products;
    this.PApiService.getAllProducts().subscribe(
      data =>{
        this.PApiService.filteredProducts = data;
      }
    )
  }

  getProByCat(value:string) {
    let id:number = parseInt(value); 
    console.log(id)
    if(id==0){
      this.PApiService.getAllProducts().subscribe(
        data =>{
          this.PApiService.filteredProducts = data;
        }
        )
    }else{
      this.PApiService.getProductsByIDCategory(id).subscribe(
        data =>{
          this.PApiService.filteredProducts = data;
        }
      )
    }
    // this.filteredProducts = this.performFilter(value);
  }

  searchByName(name:string){
    this.PApiService.getProductsByName(name).subscribe(
      data =>{
        this.PApiService.filteredProducts = data;
      }
    )
  }

  performFilterByPrice(min: string, max: string){
    this.PApiService.getAllProducts().subscribe(
      data =>{
        this.PApiService.filteredProducts = data.filter((prd:IProduct)=> prd.Price >= parseInt(min) && prd.Price <= parseInt(max));
      }
      )   
  }

  InStock(){
    this.PApiService.getProductsInStock().subscribe(
      data =>{
        this.PApiService.filteredProducts = data;
      }
      ) 
  }

  OutStock(){
    this.PApiService.getProductsOutStock().subscribe(
      data =>{
        this.PApiService.filteredProducts = data;
      }
      ) 
  }

  resetFilter(){
    this.PApiService.getAllProducts().subscribe(
      data =>{
        this.PApiService.filteredProducts = data;
      }
    )
  }

}
