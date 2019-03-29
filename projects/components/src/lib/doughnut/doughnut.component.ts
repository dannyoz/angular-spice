import { Component, OnInit, Input } from '@angular/core';
import { DoughnutSettings, DefaultSettings, Styles, DefaultStyles } from './doughnut.interface';

@Component({
  selector: 'spice-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.scss']
})
export class DoughnutComponent implements OnInit {
  @Input()
  settings: DoughnutSettings;
  computedSettings: DoughnutSettings;
  styles: Styles;

  constructor() {}

  configure() {
    this.computedSettings = { ...DefaultSettings, ...this.settings };
    this.styles = DefaultStyles;
  }

  ngOnInit() {
    this.configure();
    console.log(this.computedSettings, this.styles);
  }
}
