import { Component, OnInit,OnChanges, Input } from '@angular/core';
import { Card } from 'src/app/Models/card';
import { DiscountOffers } from 'src/app/Models/discount-offers';
import { ICategories } from 'src/app/Models/icategories';
import { IProduct } from 'src/app/Models/iproduct';
import { Store } from 'src/app/Models/store';
import { ProductServicesService } from 'src/app/services/product-services.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit{
  
  id : number=0;
  Ids: number[]=  this.PServices.ProductsIds();
  product:IProduct | undefined = undefined;

  constructor(public PServices:ProductServicesService,private activatedRouter: ActivatedRoute,private router: Router) {
  }
  ngOnInit(): void {
    // this.id = (this.activatedRouter.snapshot.paramMap.get('id'))? Number(this.activatedRouter.snapshot.paramMap.get('id')) : 0;
    this.activatedRouter.paramMap.subscribe((params)=>{
      this.id = (params.get('id'))? Number(params.get('id')): 0;
      this.product= this.PServices.getProductByID(this.id)
    })
  }
    
  
  next(){ 
   this.id= this.Ids[this.Ids.indexOf(this.id)+1];
   this.router.navigate(['/products',this.id])
  }
  
  back(){
    this.id= this.Ids[this.Ids.indexOf(this.id)-1];
    this.router.navigate(['/products',this.id])
  }

}
