import { Component, OnInit } from '@angular/core';
import { WeatherapiService } from '../services/weatherapi.service';

@Component({
  selector: 'app-weatherdetails',
  templateUrl: './weatherdetails.component.html',
  styleUrls: ['./weatherdetails.component.css']
})
export class WeatherdetailsComponent implements OnInit {

  currentData: any;

  constructor(public apiService: WeatherapiService) {

    this.currentData = [];

   }

  ngOnInit(): void {
    this.getAllCurrentWeatherInfo();
  }

  getAllCurrentWeatherInfo() {
    //Get saved list of students
    this.apiService.getList().subscribe(response => {
      console.log(response);
      this.currentData = response;
    })
  }


}
