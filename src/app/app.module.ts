import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigatonComponent } from './Components/navigaton/navigaton.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductsComponent } from './Components/products/products.component';
import { SideMenuComponent } from './Components/side-menu/side-menu.component';

import{ FormsModule } from '@angular/forms';
import { FormateCardNumberPipe } from './Pipes/formate-card-number.pipe';
import { MainComponent } from './Components/main/main.component';
import { ContactComponent } from './Components/contact/contact.component';
import { AboutComponent } from './Components/about/about.component';
import { ErrorComponent } from './Components/error/error.component';
import { AllProductsComponent } from './Components/all-products/all-products.component';
import { SingleProductComponent } from './Components/single-product/single-product.component';
import { MoreDetailsComponent } from './Components/more-details/more-details.component'
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './Components/card/card.component';
import { AdminComponent } from './Components/admin/admin.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { UsersComponent } from './Components/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigatonComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent,
    SideMenuComponent,
    FormateCardNumberPipe,
    MainComponent,
    ContactComponent,
    AboutComponent,
    ErrorComponent,
    AllProductsComponent,
    SingleProductComponent,
    MoreDetailsComponent,
    CardComponent,
    AdminComponent,
    AddProductComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    ProfileComponent,
    UsersComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
