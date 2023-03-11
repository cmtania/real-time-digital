import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DigitalClockComponent } from '../features/digital-clock/digital-clock.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    DigitalClockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
