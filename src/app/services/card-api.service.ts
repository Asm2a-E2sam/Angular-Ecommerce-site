import { Injectable } from '@angular/core';
import { ICategories } from '../Models/icategories';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../Models/iproduct';
import { Card } from '../Models/card';
import { environment } from 'src/environments/environment.development'

@Injectable({
  providedIn: 'root'
})
export class CardAPIService {

  constructor(private httpClient:HttpClient) { }

  getAllFromCard():Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`${environment.BaseApiURL}/products`);
  }

  getFromCardByID(cid : number):Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`${environment.BaseApiURL}/products?CategoryID=${cid}`);
  }

  addToCart (product :IProduct, quantity : number){
    let card:Card = {
      name: product.Name,
      price: product.Price,
      count: quantity 
    }

    
  }
   
}
