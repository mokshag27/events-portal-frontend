import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WishlistEventComponent } from './wishlist/wishlist-event/wishlist-event.component';
import { UserLoginComponent } from './auth/user-login/user-login.component';
import { UserRegisterComponent } from './auth/user-register/user-register.component';
import { CompanyLoginComponent } from './company/company-login/company-login.component';
import { CompanyRegisterComponent } from './company/company-register/company-register.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {
    path:'wishlist',
    component:WishlistEventComponent
  },
  {
    path:'login',
    component:UserLoginComponent
  },
  {
    path:'register',
    component:UserRegisterComponent
  },
  {
    path:'company-login',
    component:CompanyLoginComponent
  },
  {
    path:'company-register',
    component:CompanyRegisterComponent
  },
  {
    path:'admin-dashboard',
    component:AdminDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
