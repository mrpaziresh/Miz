import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

export interface CityLocation {
  name: string;
  country: string;
  latitude: number;
  longitude: number;
}

export interface WeatherReading {
  temperature: number;
  tempMin: number;
  tempMax: number;
  weatherCode: number;
}

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  async locateByIp(): Promise<CityLocation> {
    const res: any = await firstValueFrom(this.http.get('https://ipwho.is/'));
    if (!res || res.success === false || res.latitude == null) {
      throw new Error('Could not determine location from IP');
    }
    return {
      name: res.city || res.region || 'Unknown',
      country: res.country || '',
      latitude: res.latitude,
      longitude: res.longitude,
    };
  }

  async searchCity(query: string): Promise<CityLocation[]> {
    const res: any = await firstValueFrom(
      this.http.get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
          query
        )}&count=6&language=en&format=json`
      )
    );
    return (res.results || []).map((r: any) => ({
      name: r.name,
      country: r.country || '',
      latitude: r.latitude,
      longitude: r.longitude,
    }));
  }

  async getCurrentWeather(latitude: number, longitude: number): Promise<WeatherReading> {
    const res: any = await firstValueFrom(
      this.http.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min&timezone=auto`
      )
    );
    return {
      temperature: res.current_weather.temperature,
      weatherCode: res.current_weather.weathercode,
      tempMin: res.daily.temperature_2m_min[0],
      tempMax: res.daily.temperature_2m_max[0],
    };
  }
}

const CLEAR = 'fa-solid fa-sun';
const PARTLY_CLOUDY = 'fa-solid fa-cloud-sun';
const CLOUDY = 'fa-solid fa-cloud';
const FOG = 'fa-solid fa-smog';
const RAIN = 'fa-solid fa-cloud-showers-heavy';
const SNOW = 'fa-solid fa-snowflake';
const STORM = 'fa-solid fa-cloud-bolt';

export function weatherIconClass(code: number): string {
  if (code === 0) return CLEAR;
  if (code === 1 || code === 2) return PARTLY_CLOUDY;
  if (code === 3) return CLOUDY;
  if (code === 45 || code === 48) return FOG;
  if ([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return RAIN;
  if ([71, 73, 75, 77, 85, 86].includes(code)) return SNOW;
  if ([95, 96, 99].includes(code)) return STORM;
  return CLOUDY;
}
