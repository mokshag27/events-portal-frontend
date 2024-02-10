import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistEventComponent } from './wishlist-event.component';

describe('WishlistEventComponent', () => {
  let component: WishlistEventComponent;
  let fixture: ComponentFixture<WishlistEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WishlistEventComponent]
    });
    fixture = TestBed.createComponent(WishlistEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
