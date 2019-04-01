import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoughnutComponent } from './doughnut.component';

@NgModule({
  declarations: [DoughnutComponent],
  exports: [DoughnutComponent],
  imports: [CommonModule]
})
export class DoughnutModule {}
