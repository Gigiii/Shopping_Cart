import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Coupon {
  code: string;
  discount: number;
}

@Component({
  selector: 'coupons',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './coupons.component.html',
  styleUrl: './coupons.component.scss'
})

export class CouponsComponent {
  coupons: Coupon[] = [
    { code: 'SAVE10', discount: 10 },
    { code: 'SAVE20', discount: 20 },
    { code: 'SAVE50', discount: 50 },
  ];

  usedCoupons: string[] = [];
  inputCoupon: string = '';
  @Output() totalDiscount = new EventEmitter<number>();
  discount : number  = 0;

  applyCoupon() {
    const couponCode = this.inputCoupon.trim().toUpperCase();
    const coupon = this.coupons.find(c => c.code === couponCode);

    if (!coupon) {
      alert('Invalid coupon code');
      return;
    }

    if (this.usedCoupons.includes(couponCode)) {
      alert('You have already used this coupon');
      return;
    }

    const totalDiscount = this.calculateTotalDiscount(coupon.discount);

    this.usedCoupons.push(couponCode);

    alert(`Coupon applied! You received a ${coupon.discount}% discount.`);

    this.totalDiscount.emit(totalDiscount);

    this.inputCoupon = '';
  }

  calculateTotalDiscount(discount: number): number {

    if (this.discount + discount > 100) {
      alert('Cannot exceed 100% discount');
      return this.discount;
    }

    this.discount += discount;
    return this.discount;
  }

}
