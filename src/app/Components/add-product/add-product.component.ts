import { ProductAPIService } from 'src/app/services/product-api.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  title:boolean = false
  constructor(private productAPIService:ProductAPIService, private router: Router){
    this.title = location.href.toString().includes("addProduct");
  }

  newProduct: IProduct = {} as IProduct;
  addProduct(){
    this.productAPIService.addNewProduct(this.newProduct).subscribe({
      next:(data)=>{
        console.log("Data:", data);
        this.router.navigate(['/prouducts'])
      },
      error:(err)=>{
        console.log('Error:', err)
      }
    })
  }

//   addNewPrdStatic() {
//     let newProduct: Iproduct = {
//       id: 90,
//       name: 'new title',
//       price: 100,
//       quantity: 3,
//       prdImgURL:
//         'https://media.homecentre.com/i/homecentre/161618330-161618330-HC300719_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp-2x$',
//       categoryID: 2,
//       Material: 'wood',
//     };
//     this.apiProduct.addNewPrd(newProduct).subscribe({
//       next:(data)=>{
//         console.log("Data:", data);
//             },
//       error:(err)=>{
//         console.log('Error:', err)
//       }
//     })
// }
//         console.log(newProduct);

//         alert(this.text);
//       },

//    addNewPrd(newPrd: Iproduct): Observable<Iproduct> {
//     // console.log(newPrd);
//     console.log(
//       this.httpClient.post<Iproduct>(
//         `${environment.BaseApiURL}/products`,
//         JSON.stringify(newPrd),
//         this.http
//       )
//     );

}