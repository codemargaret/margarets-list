import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { ApplianceComponent } from './appliance/appliance.component';
import { CarComponent } from './car/car.component';
import { ElectronicComponent } from './electronic/electronic.component';
import { MusicComponent } from './music/music.component';
import { SportComponent } from './sport/sport.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ApplianceComponent,
    CarComponent,
    ElectronicComponent,
    MusicComponent,
    SportComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
