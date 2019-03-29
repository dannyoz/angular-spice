import { Component, OnInit, Input } from '@angular/core';
import {
  DoughnutSettings,
  DefaultSettings,
  Styles,
  DefaultStyles,
  SvgStyle,
  StrokeStyle,
  PathStyle,
  TextWrapperStyle,
  FontStyles
} from './doughnut.interface';
import { CalculatePathShape, Format } from './doughnut.utils';

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
  svgStyle: SvgStyle;
  circleStyle: StrokeStyle;
  pathStyle: PathStyle;
  textWrapperStyle: TextWrapperStyle;
  percentageTextStyle: FontStyles;
  labelTextStyle: FontStyles;

  viewboxAttr: string;
  dAttr: string;
  display: string;

  configureStyles() {
    this.styles = DefaultStyles;
    this.svgStyle = this.styles.svgStyle;
    this.circleStyle = { ...this.styles.circleStyle, ...this.styles.sharedStyles };
    this.pathStyle = { ...this.styles.pathStyle, ...this.styles.sharedStyles };
    this.textWrapperStyle = this.styles.textWrapperStyle;
    this.labelTextStyle = this.styles.labelTextStyle;
    this.percentageTextStyle = this.styles.percentageTextStyle;
  }

  configure() {
    this.computedSettings = { ...DefaultSettings, ...this.settings };
    this.viewboxAttr = `0 0 ${this.computedSettings.size} ${this.computedSettings.size}`;
    this.dAttr = CalculatePathShape(
      this.computedSettings.value,
      this.computedSettings.size,
      this.computedSettings.thickness
    );
    this.display = Format(this.computedSettings, this.computedSettings.value);
  }

  ngOnInit() {
    this.configure();
    this.configureStyles();
    console.log(this.computedSettings, this.styles);
  }
}
