import { Component, Input } from '@angular/core';
import { CouponsComponent } from './coupons/coupons.component';
import { CheckoutPriceComponent } from './checkout-price/checkout-price.component';

@Component({
  selector: 'checkout',
  standalone: true,
  imports: [CouponsComponent, CheckoutPriceComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  discount : number = 0;
  @Input() price! : number;

  handleDiscount(discount : number){
    this.discount = discount;
  }
}
