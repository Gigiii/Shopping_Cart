import { CartItem } from './../models/cart-item.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductRowComponent } from './product-row/product-row.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'shopping-cart',
  standalone: true,
  imports: [ProductRowComponent, CommonModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent {
  @Input() cartItems! : CartItem[];

  @Output() cartUpdated = new EventEmitter<CartItem[]>();


  removeCartItem(index: number) {
    this.cartItems.splice(index, 1);

    this.cartUpdated.emit(this.cartItems);
  }

  changeCartQuantity(index: number, quantity: number){
    console.log('This is old quantity: ' + this.cartItems[index].quantity);
    this.cartItems[index].quantity = quantity;
    console.log('This is new quantity: ' + quantity);

    this.cartUpdated.emit(this.cartItems);
  }
}
