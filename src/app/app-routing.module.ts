import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';
import { LoginComponent } from './auth/login/login.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:"",component:HomeComponent,canActivate:[AuthGuardGuard]},
  {path:"login",component:LoginComponent},
  {path:"home",component:HomeComponent,canActivate:[AuthGuardGuard]},
  {path:"product",component:ProductComponent,canActivate:[AuthGuardGuard]},
  {path:"cart",component:CartComponent,canActivate:[AuthGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
