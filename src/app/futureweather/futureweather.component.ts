import { Component, OnInit } from '@angular/core';
import { WeatherapiService } from '../services/weatherapi.service';

import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-futureweather',
  templateUrl: './futureweather.component.html',
  styleUrls: ['./futureweather.component.css']
})
export class FutureweatherComponent implements OnInit {

  currentData: any;

  /////////////////
  doughnutChartLabels: Label[] = ['Today', 'Tommorrow', 'Day After Tommorrow'];
  doughnutChartData: MultiDataSet = [
    [34, 33, 33]
  ];
  lineChartColors: Color[] = [
    {
      backgroundColor: [
        'rgba(241, 196, 15,1.0)',
        'rgba(39, 174, 96,1.0)',
        'rgba(231, 76, 60,1.0)',
      ],
    },
  ];
  doughnutChartType: ChartType = 'doughnut';
  ////////////////////
  

  constructor(public apiService: WeatherapiService) {
    this.currentData = [];

   }

  ngOnInit(): void {
    this.getAllUpcomingWeatherInfo();
  }


  getAllUpcomingWeatherInfo() {
    //Get saved list of students
    this.apiService.getForecast().subscribe(response => {
      console.log(response.forecast.forecastday[0]);
      console.log(response.forecast.forecastday[1]);
      console.log(response.forecast.forecastday[2]);

      this.currentData = response.forecast.forecastday;

    })
  }

}
