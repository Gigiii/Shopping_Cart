import { Component, Input } from '@angular/core';

@Component({
  selector: 'product-image',
  standalone: true,
  imports: [],
  templateUrl: './product-image.component.html',
  styleUrl: './product-image.component.scss'
})
export class ProductImageComponent {
  @Input() imageUrl! : string;
}
