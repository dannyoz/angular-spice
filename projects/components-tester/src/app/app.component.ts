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
    value: 78,
    labelText: 'Awesome!',
    size: 180,
    thickness: 12,
    animationDuration: 500,
    percentageFontFamily: 'arial, sans-serif',
    labelFontFamily: 'arial, sans-serif',
    labelFontSize: 12,
    percentageFontSize: 18,
    percentageFontWeight: 'normal',
    ceiling: 129
  };

  submit(event) {
    console.log(event);
  }
}
