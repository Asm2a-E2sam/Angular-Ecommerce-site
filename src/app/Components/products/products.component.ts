import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';
import { ICategories } from 'src/app/Models/icategories';
import { DiscountOffers } from 'src/app/Models/discount-offers';
import { Store } from 'src/app/Models/store';
import { Card } from 'src/app/Models/card';
import { ProductServicesService } from 'src/app/services/product-services.service'
import { CategoryAPIService } from 'src/app/services/category-api.service';
import { ProductAPIService } from 'src/app/services/product-api.service';
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
  // @Input() filteredProducts:IProduct[]=[];
  // @Input() products:IProduct[]=[];
  // @Input() tenPercent:string = '';
  // @Input() cardArr:Card[]=[]
  


  ngOnInit(): void {
    // this.filteredProducts=this.products;
    this.PApiService.getAllProducts().subscribe(
      data =>{
        this.PApiService.filteredProducts = data;
      }
    )
  }
  
  addToCard(item: IProduct,count: string){
    this.sizeOfCard += parseInt(count);
  }


  // // getDiscount(price: number,disc: number):number{
  // //   return price - (price * disc /100);
  // // }

   
  // // store:Store = new Store("Buma",["Cairo"],"https://i.postimg.cc/BvKw80Bx/favicon.png")
   

  // addToCard(item:IProduct,count:any){
  //   count = parseInt(count);
  //   let isFound=this.cardArr.find((c: Card)=>c.name==item.Name)
  //   if(isFound && count <= item.Quantity){
  //     isFound.count +=count;
  //     this.showMessage();
  //     this.MinusQuantity(item,count); 
  //   }else{
  //     if(count <= item.Quantity){
  //       let newCard:Card={name:`${item.Name}`,price:item.Price,count:1}      
  //       this.cardArr.push(newCard);
  //       this.showMessage();
  //       this.MinusQuantity(item,count);
  //     }else{
  //       alert(`Sorry! we don't have enough ${item.Name}`);
  //     }

  //   }
  //   // console.log(this.cardArr);
  // }



  // showMessage(){
  //   let hideLogo = document.getElementById("logo");
  //   setTimeout(()=>{
  //     if(hideLogo){
  //       hideLogo.innerHTML=`<div class="fs-5 border p-2">Thanks for Shopping ${this.PServices.client} ^_^</div>`;
  //     }
  //   },100);
  //   setTimeout(()=>{
  //     if(hideLogo){
  //       hideLogo.innerHTML =`<img src="${this.PServices.store.logo}" alt="logo" width="30px" class="me-2">
  //       <span class="fs-5">Welcome ${this.PServices.client}</span>`
  //    }
  //   },5000);
  // }

  // MinusQuantity(item:IProduct,count:number){
  //   let newPrd = this.products.find((prd:IProduct)=> prd.Name == item.Name)
    
  //   if(newPrd){
  //     this.products[newPrd.ID-1].Quantity -= count; 
  //     console.log(this.products[newPrd.ID-1].Quantity, this.products);
  //   }
  // }

  // PlusQuantity(item:Card){
  //   let newPrd = this.products.find((prd:IProduct)=> prd.Name == item.name)
    
  //   if(newPrd){
  //     this.products[newPrd.ID-1].Quantity +=item.count; 
  //     console.log(this.products[newPrd.ID-1].Quantity);
  //   }
  // }

  // calcTotalPrice(item:Card):number{
  //   return item.price * item.count;
  // }

  // deleteFromCard(item:Card){
  //   this.PlusQuantity(item);
  //   this.cardArr = this.cardArr.filter((ele:Card)=> ele.name != item.name)
  // }


}
