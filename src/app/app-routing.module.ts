import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

const routes: Routes = [
  {path:'nosotros', component: NosotrosComponent},
  {path:'**', component : HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
