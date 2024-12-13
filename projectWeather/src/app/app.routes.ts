import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './weather/home/home.component';
import { ClimaComponent } from './weather/clima/clima.component';
import { SobreComponent } from './weather/sobre/sobre.component';
import { NavbarComponent } from './weather/navbar/navbar.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'clima', component: ClimaComponent },
  { path: 'sobre', component: SobreComponent },
];
