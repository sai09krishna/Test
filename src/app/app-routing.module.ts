import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './shopping/cart/cart.component';
import { HomeComponent } from './shopping/home/home.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'cart', component:CartComponent},
  {path:'',redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
