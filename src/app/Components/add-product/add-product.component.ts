import { ProductAPIService } from 'src/app/services/product-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  newProduct: IProduct = {} as IProduct;
  title:boolean = false

  constructor(private productAPIService:ProductAPIService, private router: Router, private activatedRouter:ActivatedRoute){
    this.title = location.href.toString().includes("addProduct");
    // this.newProduct =  productAPIService.getProductByID(3).subscribe({})
  }

  addProduct(){
    this.productAPIService.addNewProduct(this.newProduct).subscribe({
      next:(data)=>{
        console.log("Data:", data);
        this.router.navigate(['/products'])
      },
      error:(err)=>{
        console.log('Error:', err)
      }
    })
  }

  editProduct(){
    this.productAPIService.editProduct(this.newProduct).subscribe({
      next:(data)=>{
        console.log("Data:", data);
        this.router.navigate(['/home'])
      },
      error:(err)=>{
        console.log('Error:', err)
      }
    })
  }

  ngOnInit(): void {
    // this.id = (this.activatedRouter.snapshot.paramMap.get('id'))? Number(this.activatedRouter.snapshot.paramMap.get('id')) : 0;
    if(!this.title){
      this.activatedRouter.paramMap.subscribe((params)=>{
        let id = (params.get('id'))? Number(params.get('id')): 0;
        this.productAPIService.getProductByID(id).subscribe({
          next:(data)=>{
            this.newProduct= data;
          }
        })
      })
    }
  }
}