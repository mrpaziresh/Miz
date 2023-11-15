import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { GooglesearchComponent } from './googlesearch/googlesearch.component';
import { MainComponent } from './main/main.component';
import { ClockComponent } from './clock/clock.component';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { CalenderComponent } from './calender/calender.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    LoginComponent,
    GooglesearchComponent,
    MainComponent,
    ClockComponent,
    TodoComponent,
    CalenderComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
