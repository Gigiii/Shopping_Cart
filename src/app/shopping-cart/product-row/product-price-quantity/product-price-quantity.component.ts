import { CartItem } from './../../../models/cart-item.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'product-price-quantity',
  standalone: true,
  imports: [],
  templateUrl: './product-price-quantity.component.html',
  styleUrl: './product-price-quantity.component.scss'
})
export class ProductPriceQuantityComponent {
  @Input() cartItem! : CartItem;
  @Input() index! : number;
  @Output() change = new EventEmitter<{ index: number, quantity: number}>();

  onChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const quantity = parseInt(input.value, 10);
    this.change.emit({ index: this.index, quantity });
  }
}
