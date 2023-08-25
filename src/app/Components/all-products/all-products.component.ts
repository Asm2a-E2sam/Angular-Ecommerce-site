import { Component } from '@angular/core';
import { DiscountOffers } from 'src/app/Models/discount-offers';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductServicesService } from 'src/app/services/product-services.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent {

  products: IProduct[]= [];
  
  tenPercent:string = DiscountOffers.TEN_PERCENT;
  filteredProducts:IProduct[]=[];

  constructor(public PServices:ProductServicesService) {
    this.products=PServices.products;
  }
  
}
