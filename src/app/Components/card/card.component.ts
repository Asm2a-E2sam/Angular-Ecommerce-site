import { Component } from '@angular/core';
import { Card } from 'src/app/Models/card';
import { ProductServicesService } from 'src/app/services/product-services.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  cardArr:Card[] = []
  constructor(public PServices:ProductServicesService) { 
    this.cardArr = PServices.cardArr;
  }
}
