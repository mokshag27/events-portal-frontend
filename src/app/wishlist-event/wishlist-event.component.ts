import { Component, OnInit } from '@angular/core';
import { WishlistEvent } from '../shared/interface/wishlistevent.interface';
import { WishlistEventService } from '../wishlist/wishlist-event.service';

@Component({
  selector: 'app-wishlist-event',
  templateUrl: './wishlist-event.component.html',
  styleUrls: ['./wishlist-event.component.css'],
})
export class WishlistEventComponent implements OnInit {
  events!: WishlistEvent[];
  user_id!:number
  constructor(private wishlistEventService: WishlistEventService) {}

  ngOnInit(): void {
    this.loadWishlistEvents(this.user_id);
  }
  loadWishlistEvents(user_id:number): void {
    this.wishlistEventService.getWishlistEvents(user_id).subscribe((events) => {
      this.events = events;
    });
  }
}
