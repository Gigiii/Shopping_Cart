import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem } from '../../models/cart-item.model';
import { ProductImageComponent } from './product-image/product-image.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ProductPriceQuantityComponent } from './product-price-quantity/product-price-quantity.component';

@Component({
  selector: 'product-row',
  standalone: true,
  imports: [ProductImageComponent, ProductDescriptionComponent, ProductPriceQuantityComponent],
  templateUrl: './product-row.component.html',
  styleUrl: './product-row.component.scss'
})
export class ProductRowComponent {

  @Input() cartItem! : CartItem;
  @Input() index!: number;
  @Output() remove = new EventEmitter<number>();
  @Output() changeQty = new EventEmitter<{index: number, quantity: number}>();


  onRemove() {
    this.remove.emit(this.index);
  }

  onChange(quantity: number) {
    if (quantity >= 1) {
      this.changeQty.emit({ index: this.index, quantity });
    }
  }
}
