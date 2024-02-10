import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WishlistEventComponent } from './wishlist/wishlist-event/wishlist-event.component';

const routes: Routes = [
  {
    path:'wishlist',
    component:WishlistEventComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
