import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FutureweatherComponent } from './futureweather/futureweather.component';
import { WeatherdetailsComponent } from './weatherdetails/weatherdetails.component';


const routes: Routes = [
  {path:'weather', component: WeatherdetailsComponent},
  {path:'weather-forecast', component: FutureweatherComponent},
  {path:'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
