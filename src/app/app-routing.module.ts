import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryTimezoneMapComponent } from './country-timezone-map/country-timezone-map.component';


const routes: Routes = [
  { path: 'country', component: CountryTimezoneMapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
