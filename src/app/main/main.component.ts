import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { CityLocation, WeatherService, weatherIconClass } from '../weather.service';

const STORAGE_KEY = 'miz.weather.location';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit, OnDestroy {
  cityName = '';
  temperature: number | null = null;
  tempMin: number | null = null;
  tempMax: number | null = null;
  weatherCode = 0;
  loading = true;
  editingCity = false;
  query = '';
  results: CityLocation[] = [];

  private querySubject = new Subject<string>();
  private querySub = this.querySubject
    .pipe(debounceTime(350), distinctUntilChanged())
    .subscribe((q) => this.runSearch(q));

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.init();
  }

  ngOnDestroy(): void {
    this.querySub.unsubscribe();
  }

  get iconClass(): string {
    return weatherIconClass(this.weatherCode);
  }

  startEdit(): void {
    this.editingCity = true;
    this.query = '';
    this.results = [];
  }

  cancelEdit(): void {
    this.editingCity = false;
    this.results = [];
  }

  onQueryChange(value: string): void {
    this.querySubject.next(value);
  }

  async selectCity(city: CityLocation): Promise<void> {
    this.editingCity = false;
    this.results = [];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(city));
    await this.loadWeather(city);
  }

  private async init(): Promise<void> {
    const saved = this.readSavedLocation();
    if (saved) {
      await this.loadWeather(saved);
      return;
    }

    try {
      const located = await this.weatherService.locateByIp();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(located));
      await this.loadWeather(located);
    } catch {
      this.loading = false;
      this.startEdit();
    }
  }

  private async runSearch(query: string): Promise<void> {
    const trimmed = query.trim();
    if (trimmed.length < 2) {
      this.results = [];
      return;
    }
    try {
      this.results = await this.weatherService.searchCity(trimmed);
    } catch {
      this.results = [];
    }
  }

  private async loadWeather(city: CityLocation): Promise<void> {
    this.loading = true;
    try {
      const reading = await this.weatherService.getCurrentWeather(city.latitude, city.longitude);
      this.cityName = city.name;
      this.temperature = Math.round(reading.temperature);
      this.tempMin = Math.round(reading.tempMin);
      this.tempMax = Math.round(reading.tempMax);
      this.weatherCode = reading.weatherCode;
    } catch {
      this.cityName = city.name;
      this.temperature = null;
      this.tempMin = null;
      this.tempMax = null;
    } finally {
      this.loading = false;
    }
  }

  private readSavedLocation(): CityLocation | null {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }
}
