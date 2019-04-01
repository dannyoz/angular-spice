export enum DoughnutFormat {
  Percentage = 'percentage',
  Fraction = 'fraction'
}

export enum Position {
  Top = 'top',
  Bottom = 'bottom'
}

export interface DoughnutSettings {
  value: number;
  size?: number;
  thickness?: number;
  animationDuration?: number;
  primaryColour?: string;
  ringColour?: string;
  labelText?: string;
  labelColour?: string;
  labelFontSize?: number;
  labelFontWeight?: string;
  labelFontFamily?: string;
  labelPosition?: Position;
  percentageFontSize?: number;
  percentageFontWeight?: string;
  percentageFontFamily?: string;
  ceiling?: number;
  format?: DoughnutFormat;
  percentageDecimals?: number;
}

export interface FontStyles {
  fontFamily?: string;
  fontWeight?: string;
  fontSize?: string;
  color?: string;
  margin?: string;
}

export interface SvgStyle {
  width?: string;
  height?: string;
}

export interface TextWrapperStyle {
  position?: string;
  left?: string;
  top?: string;
  transform?: string;
  textAlign?: string;
}

export interface StrokeStyle {
  stroke?: string;
  fill?: string;
  strokeWidth?: string;
}

export interface PathStyle {
  fill?: string;
  strokeWidth?: string;
}

export interface Styles {
  svgStyle: SvgStyle;
  sharedStyles: PathStyle;
  circleStyle: StrokeStyle;
  pathStyle: StrokeStyle;
  textWrapperStyle: TextWrapperStyle;
  percentageTextStyle: FontStyles;
  labelTextStyle: FontStyles;
}

export const DefaultSettings: DoughnutSettings = {
  value: 100,
  size: 150,
  thickness: 5,
  primaryColour: '#e7534f',
  ringColour: '#DDDDDD',
  percentageFontSize: 28,
  percentageFontWeight: 'bold',
  ceiling: 100,
  format: DoughnutFormat.Percentage,
  labelPosition: Position.Bottom,
  labelFontSize: 14,
  percentageDecimals: 0
};

export const DefaultStyles: Styles = {
  svgStyle: {
    width: '150px',
    height: '150px'
  },
  sharedStyles: {
    fill: 'none',
    strokeWidth: '5px'
  },
  circleStyle: {
    stroke: '#DDDDDD',
    fill: 'none',
    strokeWidth: '5px'
  },
  pathStyle: {
    stroke: '#e7534f',
    fill: 'none',
    strokeWidth: '5px'
  },
  textWrapperStyle: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'centre'
  },
  percentageTextStyle: {
    fontFamily: 'inherit',
    fontWeight: 'bold',
    fontSize: '28px',
    color: '#e7534f',
    margin: '0'
  },
  labelTextStyle: {
    fontFamily: 'inherit',
    fontWeight: 'normal',
    fontSize: '14px',
    color: '#e7534f',
    margin: '0'
  }
};
