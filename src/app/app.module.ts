import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherdetailsComponent } from './weatherdetails/weatherdetails.component';
import { FutureweatherComponent } from './futureweather/futureweather.component';

import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    WeatherdetailsComponent,
    FutureweatherComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
