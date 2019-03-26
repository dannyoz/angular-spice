import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DoughnutModule } from '../../../components/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DoughnutModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
