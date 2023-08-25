import { Injectable } from '@angular/core';
import { ICategories } from '../Models/icategories';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../Models/iproduct';
import { environment } from 'src/environments/environment.development'

@Injectable({
  providedIn: 'root'
})
export class ProductAPIService{
  filteredProducts:IProduct[]=[] 
  constructor(private httpClient:HttpClient) { }

  getAllProducts():Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`${environment.BaseApiURL}/products`);
  }

  getProductsByIDCategory(cid : number):Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`${environment.BaseApiURL}/products?CategoryID=${cid}`);
  }

  getProductsByName(name: string):Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`${environment.BaseApiURL}/products?Name=${name}`);
  }

}

