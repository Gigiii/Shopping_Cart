import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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

    if (totalDiscount > 100) {
      alert('Cannot exceed 100% discount');
      return;
    }

    this.usedCoupons.push(couponCode);
    alert(`Coupon applied! You received a ${coupon.discount}% discount.`);
    this.inputCoupon = '';
  }

  calculateTotalDiscount(discount: number): number {
    // This function would normally take the current total amount and calculate the new discount
    // For now, we will just return the discount as a demonstration.
    // You can replace this with your total calculation logic.
    return discount;
  }

}
