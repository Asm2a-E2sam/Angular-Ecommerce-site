import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './Components/products/products.component';
import { MainComponent } from './Components/main/main.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ErrorComponent } from './Components/error/error.component';
import { AllProductsComponent } from './Components/all-products/all-products.component';
import { SingleProductComponent } from './Components/single-product/single-product.component';
import { MoreDetailsComponent } from './Components/more-details/more-details.component';
import { CardComponent } from './Components/card/card.component';

const routes: Routes = [
  {path:"", redirectTo :"home", pathMatch:"full"},
  {path:"home", component: MainComponent},
  // {path:"allproducts", component: AllProductsComponent},
  {path:"products", component: MoreDetailsComponent ,
  children:
    [{path: "", component: AllProductsComponent},
    {path: ":id", component: SingleProductComponent},
    {path:"**", component: ErrorComponent}
  ]},
  {path:"contact", component: ContactComponent},
  {path:"card", component: CardComponent},
  {path:"about", component: AboutComponent},
  {path:"**", component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
