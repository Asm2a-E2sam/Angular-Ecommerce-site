import { Component, OnInit, Input } from '@angular/core';
import { ProductServicesService } from 'src/app/services/product-services.service';
import { ICategories } from 'src/app/Models/icategories';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductAPIService } from 'src/app/services/product-api.service';

@Component({
  selector: 'app-navigaton',
  templateUrl: './navigaton.component.html',
  styleUrls: ['./navigaton.component.scss']
})
export class NavigatonComponent implements OnInit {
  constructor(public PServices:ProductServicesService, private PApiService: ProductAPIService){    
  }
  
  @Input() sizeOfCard:number = 0;
  


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
        this.PApiService.filteredProducts = data.filter((prd:IProduct)=>prd.Price > parseInt(min) && prd.Price < parseInt(max));
      }
      )   
  }
}