import { Component, OnInit,OnChanges, Input } from '@angular/core';
import { Card } from 'src/app/Models/card';
import { DiscountOffers } from 'src/app/Models/discount-offers';
import { ICategories } from 'src/app/Models/icategories';
import { IProduct } from 'src/app/Models/iproduct';
import { Store } from 'src/app/Models/store';
import { ProductServicesService } from 'src/app/services/product-services.service';
// import { HttpClientModule} from '@angular/common/http'
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  client: string = "Asmaa"; 
  cardArr:Card[]=[];
  store:Store = new Store("Buma",["Cairo"],"https://i.postimg.cc/BvKw80Bx/favicon.png")
  categories: ICategories[] = [];
  products: IProduct[]= [];

  // date: Date= new Date();
  filteredProducts:IProduct[]=[];

  card:string ="1234567894561236"

  filtername: string=''
  filtername2: string=''

  constructor(public PServices:ProductServicesService) {
    this.categories=PServices.categories
    this.products=PServices.products
  }
  
  ngOnInit(): void {
    this.filtername = this.PServices.filtername
    this.filtername2 = this.PServices.filtername2
    this.filteredProducts=this.products;
  }

  
  // filtername: string=''
  
  // set listFilter(value:string) {
  //   this.filtername= value;
  //   this.filteredProducts = this.performFilter(value);
  // }
  
  // // filter data
  // performFilter(filterValue:string):IProduct[]{
  //   // const id = this.categories.findIndex(cat => cat.name.includes(filterValue))
  //   if(filterValue == "All Categories"){
  //     return this.products
  //   }else{
  //   return this.products.filter((prd:IProduct)=>prd.CategoryName.includes(filterValue));
  //   }
  // }

  // filtername2: string=''
  // // filter data
  // performFilterByName(filterValue:string){
  //   this.filtername2= filterValue;
  //   this.filteredProducts = this.products.filter((prd:IProduct)=>prd.Name.includes(filterValue));
  // }

  // performFilterByPrice(min:string, max:string){
  //   this.filteredProducts = this.products.filter((prd:IProduct)=>prd.Price > parseInt(min) && prd.Price < parseInt(max));
  // }

  // PlusQuantity(item:Card){
  //   this.filteredProducts = this.editProduct(item);
  // }

  // calcTotalPrice(item:Card):number{
  //   return item.price * item.count;
  // }

  // deleteFromCard(item:Card){
  //   this.PlusQuantity(item);
  //   this.cardArr = this.cardArr.filter((ele:Card)=> ele.name != item.name)
  // }

  // editProduct(item:Card):IProduct[]{
  //   let newPrd = this.products.find((prd:IProduct)=> prd.Name == item.name)
    
  //   if(newPrd){
  //     this.products[newPrd.ID-1].Quantity +=item.count; 
  //     console.log(this.products[newPrd.ID-1].Quantity, this.products);
  //   }
  //   return this.products;
  // }
    
}
