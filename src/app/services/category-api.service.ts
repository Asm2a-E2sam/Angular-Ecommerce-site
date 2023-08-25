import { Injectable } from '@angular/core';
import { ICategories } from '../Models/icategories';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../Models/iproduct';
import { environment } from 'src/environments/environment.development'
@Injectable({
  providedIn: 'root'
})
export class CategoryAPIService {

  constructor(private httpClient:HttpClient) { }

  getAllCategories():Observable<ICategories[]>{
    return this.httpClient.get<ICategories[]>(`${environment.BaseApiURL}/categories`);
  }

  getProductsByIDCategory(id : number):Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`${environment.BaseApiURL}/categories/${id}`);
  }

  getAllProducts():Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`${environment.BaseApiURL}/products`);
  }
  
}
