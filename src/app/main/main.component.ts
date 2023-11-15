import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  weatherdata: any;
  constructor() {}

  ngOnInit(): void {
    this.getWeather();
    console.log(this.weatherdata);
  }

  getWeather() {
    let data = JSON.parse(
      '{"coord":{"lon":51.4215,"lat":35.6944},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50d"}],"base":"stations","main":{"temp":289.88,"feels_like":288.86,"temp_min":286.94,"temp_max":290.14,"pressure":1020,"humidity":48},"visibility":4000,"wind":{"speed":2.06,"deg":190},"clouds":{"all":20},"dt":1699251468,"sys":{"type":2,"id":47737,"country":"IR","sunrise":1699239638,"sunset":1699277712},"timezone":12600,"id":112931,"name":"Tehran","cod":200}'
    );
    // console.log(data);
    this.setWeather(data);
  }

  setWeather(data: any) {
    this.weatherdata = data;
    let sunsetTime = new Date(this.weatherdata.sys.sunset * 1000);
    this.weatherdata.sunsetTime = sunsetTime.toLocaleTimeString();
    let currentdate = new Date();
    this.weatherdata.isDay = currentdate.getTime() < sunsetTime.getTime();

    this.weatherdata.temp_celcius = (
      this.weatherdata.main.temp - 273.15
    ).toFixed(0);
    this.weatherdata.temp_min = (
      this.weatherdata.main.temp_min - 273.15
    ).toFixed(0);
    this.weatherdata.temp_max = (
      this.weatherdata.main.temp_max - 273.15
    ).toFixed(0);
    this.weatherdata.feels_like = (
      this.weatherdata.main.feels_like - 273.15
    ).toFixed(0);
  }
}
