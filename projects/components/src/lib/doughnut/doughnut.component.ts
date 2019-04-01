import { Component, OnInit, Input } from '@angular/core';
import {
  DoughnutSettings,
  DefaultSettings,
  SvgStyle,
  StrokeStyle,
  TextWrapperStyle,
  FontStyles
} from './doughnut.interface';
import { CalculatePathShape, Format, StepDuration, GenerateStyles } from './doughnut.utils';

@Component({
  selector: 'spice-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.scss']
})
export class DoughnutComponent implements OnInit {
  @Input()
  settings: DoughnutSettings;
  computedSettings: DoughnutSettings;

  svgStyle: SvgStyle;
  circleStyle: StrokeStyle;
  pathStyle: StrokeStyle;
  textWrapperStyle: TextWrapperStyle;
  percentageTextStyle: FontStyles;
  labelTextStyle: FontStyles;

  viewboxAttr: string;
  dAttr: string;
  display: string;
  appliedValue: number;

  configure(): void {
    this.computedSettings = { ...DefaultSettings, ...this.settings };
    this.viewboxAttr = `0 0 ${this.computedSettings.size} ${this.computedSettings.size}`;

    const styles = GenerateStyles(this.computedSettings);

    this.svgStyle = styles.svgStyle;
    this.circleStyle = styles.circleStyle;
    this.pathStyle = styles.pathStyle;
    this.textWrapperStyle = styles.textWrapperStyle;
    this.labelTextStyle = styles.labelTextStyle;
    this.percentageTextStyle = styles.percentageTextStyle;
  }

  displayValue(value: number): void {
    this.dAttr = CalculatePathShape(
      value,
      this.computedSettings.size,
      this.computedSettings.thickness
    );
    this.display = Format(this.computedSettings, value);
  }

  animate(): void {
    console.log(this.computedSettings.animationDuration);
    for (let index = 0; index < this.computedSettings.value + 1; index++) {
      setTimeout(() => {
        this.displayValue(index);
      }, index * StepDuration(this.computedSettings.value, this.computedSettings.animationDuration));
    }
  }

  ngOnInit() {
    this.configure();

    if (this.computedSettings.animationDuration || this.computedSettings.animationDuration > 0) {
      this.animate();
    } else {
      this.displayValue(this.computedSettings.value);
    }
  }
}
