import { Component } from '@angular/core';
import { Store } from 'src/app/Models/store';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    store:Store = new Store("Buma",["Cairo"],"https://i.postimg.cc/BvKw80Bx/favicon.png")
}



