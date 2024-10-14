import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutPriceComponent } from './checkout-price.component';

describe('CheckoutPriceComponent', () => {
  let component: CheckoutPriceComponent;
  let fixture: ComponentFixture<CheckoutPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckoutPriceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
