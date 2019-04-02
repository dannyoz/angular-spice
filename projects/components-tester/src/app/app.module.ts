import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DoughnutModule, ButtonModule } from '../../../components/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DoughnutModule, ButtonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
