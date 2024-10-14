import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'product-description',
  standalone: true,
  imports: [],
  templateUrl: './product-description.component.html',
  styleUrl: './product-description.component.scss'
})
export class ProductDescriptionComponent {
  @Input() product! : Product;
  @Input() index!: number;
  @Output() remove = new EventEmitter<number>();

  onRemove() {
    this.remove.emit(this.index);
  }

}
