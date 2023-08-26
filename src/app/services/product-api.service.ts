import { Injectable } from '@angular/core';
import { ICategories } from '../Models/icategories';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IProduct } from '../Models/iproduct';
import { environment } from 'src/environments/environment.development'

@Injectable({
  providedIn: 'root'
})
export class ProductAPIService{
  filteredProducts:IProduct[]=[] 
  http = {};
  constructor(private httpClient:HttpClient) { 
    this.http = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
  }

  getAllProducts():Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`${environment.BaseApiURL}/products`);
  }

  getProductsByIDCategory(cid : number):Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`${environment.BaseApiURL}/products?CategoryID=${cid}`);
  }

  getProductsByName(name: string):Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`${environment.BaseApiURL}/products?Name_like=${name}`);
  }

  getProductsInStock():Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`${environment.BaseApiURL}/products?Quantity_ne=0`);
  }
  getProductsOutStock():Observable<IProduct[]>{
    return this.httpClient.get<IProduct[]>(`${environment.BaseApiURL}/products?Quantity=0`);
  }

  addNewProduct(newProduct: IProduct): Observable<IProduct> {
    return this.httpClient.post<IProduct>(
      `${environment.BaseApiURL}/products`,
      JSON.stringify(newProduct),
      this.http
    );
  }

}

