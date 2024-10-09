import { Component } from '@angular/core';
import { HeaderItemComponent } from './header-item/header-item.component';
import { HeaderLogoComponent } from './header-logo/header-logo.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'header',
  standalone: true,
  imports: [HeaderItemComponent, HeaderLogoComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  logoUrl: string = "images/header/logo.png";

  items: any[] = [
    {"itemName" : "Profile", "itemLogoUrl" : "images/header/user-icon.png"},
    {"itemName" : "Message", "itemLogoUrl" : "images/header/user-icon.png"},
    {"itemName" : "Orders", "itemLogoUrl" : "images/header/user-icon.png"},
    {"itemName" : "My Cart", "itemLogoUrl" : "images/header/user-icon.png"},
  ];
}
