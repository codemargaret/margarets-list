import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ApplianceComponent } from './appliance/appliance.component';
import { CarComponent } from './car/car.component';
import { ElectronicComponent } from './electronic/electronic.component';
import { MusicComponent } from './music/music.component';
import { SportComponent } from './sport/sport.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'appliance',
    component: ApplianceComponent
  },
  {
    path: 'car',
    component: CarComponent
  },
  {
    path: 'electronic',
    component: ElectronicComponent
  },
  {
    path: 'music',
    component: MusicComponent
  },
  {
    path: 'sport',
    component: SportComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
