import { Component, OnInit, Input } from '@angular/core';
import { ButtonSettings } from './button.interface';

@Component({
  selector: 'spice-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input()
  settings: ButtonSettings;

  submit(event) {
    console.log(event);
  }

  ngOnInit() {
    console.log(this.settings);
  }
}
