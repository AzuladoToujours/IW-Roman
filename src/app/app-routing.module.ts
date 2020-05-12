import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RomanNumbersComponent} from './roman-numbers/roman-numbers.component'


const routes: Routes = [ 
  { path: '', redirectTo: '/romanNumbers', pathMatch: 'full' },
{
  path: 'romanNumbers',
  component: RomanNumbersComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
