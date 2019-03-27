import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';
import { $ } from 'protractor';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss']
})
export class StockItemComponent implements OnInit {

  public stock: Stock;

  constructor() { }

  ngOnInit() {
    this.stock = new Stock('Angular company', 'AC', 85, 80);
  }

  toggleFavorite(event) {
    console.log('hi my toggle', event);
    this.stock.favorite = !this.stock.favorite;
  }

}
