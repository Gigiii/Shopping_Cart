import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { Product } from './models/product.model';
import { CartItem } from './models/cart-item.model';
import { CheckoutComponent } from './checkout/checkout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ShoppingCartComponent, CheckoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Shopping_Cart';

  cartItems : CartItem[] = [

    {
      product: new Product("images/items/blue-shirt.jpg", "Blue Shirt", "Small", "Blue", "Linen", 'Nike', 400),
      quantity: 5
    },
    {
      product: new Product("images/items/blue-shirt.jpg", "Blue Shirt", "Small", "Blue", "Linen", 'Nike', 400),
      quantity: 5
    }
  ]
  price : number = this.getTotalPrice();

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => {
      return total + (item.product.price * item.quantity);
    }, 0)
  }

  updateTotalPrice() {
    this.price = this.getTotalPrice();
  }

  handleCartUpdate(updatedCartItems: CartItem[]){
    this.cartItems = updatedCartItems;
    this.updateTotalPrice();
  }
}
