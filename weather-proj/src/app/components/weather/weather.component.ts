export { WeatherComponent } from './weather.component';
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <h2>{{ weather.name }}</h2>
      <p>Temperatura: {{ weather.main.temp }}°C</p>
      <p>Descrição: {{ weather.weather[0].description }}</p>
    </div>
  `,
  styles: [
    `
      div {
        padding: 1rem;
      }
    `,
  ],
})
export class  implements OnInit {
  @Input() city!: string;
  weather: any;

  constructor(private weatherService: WeatherService) {}

  OnInit() {
      this.weatherService.getWeather(this.city).subscribe((data) => {
        this.weather = data;
      });
    }
  }

