import { Component, OnInit, Input } from '@angular/core';
import { DoughnutSettings } from './doughnut.interface';

@Component({
  selector: 'spice-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.scss']
})
export class DoughnutComponent implements OnInit {
  @Input()
  settings: DoughnutSettings;

  constructor() {}

  ngOnInit() {
    console.log(this.settings);
  }
}
