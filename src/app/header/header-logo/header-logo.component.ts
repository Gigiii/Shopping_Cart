import { Component, Input } from '@angular/core';

@Component({
  selector: 'header-logo',
  standalone: true,
  imports: [],
  templateUrl: './header-logo.component.html',
  styleUrl: './header-logo.component.scss'
})
export class HeaderLogoComponent {
  @Input() logoUrl! : string;

}
