import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistEventComponent } from './wishlist-event/wishlist-event.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    WishlistEventComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule
  ],
  exports:[
    WishlistEventComponent
  ]
})
export class WishlistModule { }
