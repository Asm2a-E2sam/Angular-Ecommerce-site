import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {
  categories: import("c:/Users/asmaa/OneDrive/Documents/MERN/12-Angular/ecommerce/src/app/Models/icategories").ICategories[];
  products: import("c:/Users/asmaa/OneDrive/Documents/MERN/12-Angular/ecommerce/src/app/Models/iproduct").IProduct[];
  filtername: any;
  filtername2: any;
  listFilter: any;

  constructor() { }
}
