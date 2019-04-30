import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ButtonSettings } from './button.interface';

@Component({
  selector: 'spice-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input()
  settings: ButtonSettings;

  @Output()
  submit = new EventEmitter();

  // submit(event) {
  //   console.log(event);
  // }

  ngOnInit() {
    console.log(this.settings);
  }
}
