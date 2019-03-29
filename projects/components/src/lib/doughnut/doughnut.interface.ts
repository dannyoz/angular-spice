enum Format {
  Percentage = 'percentage',
  Fraction = 'fraction'
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
  percentageFontSize?: number;
  percentageFontWeight?: string;
  ceiling?: number;
  format?: Format;
}

export interface FontStyles {
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
  fontFamily?: string;
  position?: string;
  left?: string;
  top?: string;
  transform?: string;
  textAlign?: string;
}

export interface StrokeStyle {
  stroke?: string;
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
  format: Format.Percentage
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
    stroke: '#DDDDDD'
  },
  pathStyle: {
    stroke: '#e7534f'
  },
  textWrapperStyle: {
    fontFamily: 'inherit',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'centre'
  },
  percentageTextStyle: {
    fontWeight: 'bold',
    fontSize: '28px',
    color: '#e7534f',
    margin: '0'
  },
  labelTextStyle: {
    fontWeight: 'normal',
    fontSize: '14px',
    color: '#e7534f',
    margin: '0'
  }
};
