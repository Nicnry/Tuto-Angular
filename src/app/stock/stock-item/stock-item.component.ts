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
  public stockClasses;

  constructor() { }

  ngOnInit() {
    this.stock = new Stock('Angular company', 'AC', 85, 80);
    let diff = (this.stock.price / this.stock.previousPrice) - 1;
    let largeChange = Math.abs(diff) > 0.01;
    this.stockClasses = {
      "positive": this.stock.isPositiveChange(),
      "negative": !this.stock.isPositiveChange(),
      "large-change": largeChange,
      "small-change": !largeChange
    };
  }

  toggleFavorite(event) {
    console.log('hi my toggle', event);
    this.stock.favorite = !this.stock.favorite;
  }

}
