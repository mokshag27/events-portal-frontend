import { TestBed } from '@angular/core/testing';

import { WishlistEventService } from './wishlist-event.service';

describe('WishlistEventService', () => {
  let service: WishlistEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WishlistEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
