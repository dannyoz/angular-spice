import { Component } from '@angular/core';
import { DoughnutSettings } from '../../../components/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'components-tester';
  doughnutSettings: DoughnutSettings = {
    value: 75,
    labelText: 'Awesome!',
    size: 180,
    thickness: 12,
    animationDuration: 1000,

    percentageFontFamily: 'arial, sans-serif',
    labelFontFamily: 'arial, sans-serif',
    labelFontSize: 12,
    percentageFontSize: 18,
    percentageFontWeight: 'normal',

    ceiling: 129
  };
}
