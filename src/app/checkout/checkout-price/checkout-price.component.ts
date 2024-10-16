import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'checkout-price',
  standalone: true,
  imports: [],
  templateUrl: './checkout-price.component.html',
  styleUrl: './checkout-price.component.scss'
})
export class CheckoutPriceComponent {
  @Input() subtotal!: number;
  @Input() discount!: number;
  tax : number = 0;
  totalDiscount : number = 0;
  total : number = 0;


  ngOnChanges(changes: SimpleChanges) {
    if (changes['subtotal'] || changes['discount']) {
      this.tax = this.calculateTax();
      this.total = this.calculateTotal();
    }
  }

  calculateTotal(){
    this.totalDiscount = ((this.discount * this.subtotal) / 100);
    return (this.subtotal - this.totalDiscount + this.tax);
  }

  calculateTax(){
    return this.subtotal * 0.05;
  }
}
