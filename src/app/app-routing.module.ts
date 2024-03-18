import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { NewBurgerComponent } from './views/new-burger/new-burger.component';
import { InfoComponent } from './views/info/info.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'newBurger', component: NewBurgerComponent},
  {path: 'burguer', component: InfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
