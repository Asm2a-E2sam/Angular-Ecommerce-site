import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivateFn } from '@angular/router';
import { ProductsComponent } from './Components/products/products.component';
import { MainComponent } from './Components/main/main.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ErrorComponent } from './Components/error/error.component';
import { AllProductsComponent } from './Components/all-products/all-products.component';
import { SingleProductComponent } from './Components/single-product/single-product.component';
import { MoreDetailsComponent } from './Components/more-details/more-details.component';
import { CardComponent } from './Components/card/card.component';
import { AdminComponent } from './Components/admin/admin.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { UsersComponent } from './Components/users/users.component';
import { userGuard } from './Guards/user.guard';
import { adminGuard } from './Guards/admin.guard';
import { AdminLoginComponent } from './Components/admin-login/admin-login.component';

const routes: Routes = [
  {path:"", redirectTo :"home", pathMatch:"full"},
  {path:"home", component: MainComponent, canActivate:[userGuard]},
  {path:"products", component: MoreDetailsComponent, canActivate:[userGuard],
  children:
    [{path: "", component: AllProductsComponent},
    {path: ":id", component: SingleProductComponent}    
    ]
  },
  {path:"contact", component: ContactComponent, canActivate:[userGuard]},
  {path:"card", component: CardComponent, canActivate:[userGuard]},
  {path:"about", component: AboutComponent, canActivate:[userGuard]},
  {path:"admin", component: AdminComponent,
  children:
    [{path:"", component: AdminComponent},
    {path:"login", component: AdminLoginComponent},
    {path: "addProduct", component: AddProductComponent, canActivate:[adminGuard]},    
    {path: "editProduct/:id", component: AddProductComponent, canActivate:[adminGuard]},    
    ]
  },
  {
    path: 'users', 
    loadChildren: () => import('src/app/Components/user/user.module').then(m => m.UserModule)
  },
  {path:"user", component: UsersComponent,
  children:
    [{path:"", component: UsersComponent},
    {path: "login", component: LoginComponent},
    {path: "register", component: RegisterComponent},
    {path: "profile", component: ProfileComponent, canActivate:[userGuard]}
    ]
  },
  {path: "logout", component: LogoutComponent, canActivate:[userGuard||adminGuard]},
  {path:"**", component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
