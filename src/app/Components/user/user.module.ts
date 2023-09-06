import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { LogoinComponent } from './logoin/logoin.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes=[
  {path:'', component :LogoinComponent},
  {path:'login', component :LogoinComponent},
  {path:'viewProfile', component :ViewProfileComponent},
  {path:'eidtProfile', component :EditProfileComponent},
]

@NgModule({
  declarations: [
    ViewProfileComponent,
    EditProfileComponent,
    LogoinComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
