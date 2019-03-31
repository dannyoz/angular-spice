import { DefaultStyles, DoughnutSettings, PathStyle } from './doughnut.interface';

export const CalculatePathShape = (percentage, size, thickness): string => {
  const PI = Math.PI;
  const cos = Math.cos;
  const sin = Math.sin;
  const centerY = size / 2;
  const centerX = size / 2;
  const radius = size / 2 - thickness;
  const startAngle = -90;
  const startRadians = (startAngle * PI) / 180;
  const endAngle = percentage * 3.6 - 90;
  const endRadians = ((endAngle - 0.0001) * PI) / 180;
  const largeArc = (endRadians - startRadians) % (PI * 2) > PI ? 1 : 0;
  const startX = centerX + cos(startRadians) * radius;
  const startY = centerY + sin(startRadians) * radius;
  const endX = centerX + cos(endRadians) * radius;
  const endY = centerY + sin(endRadians) * radius;

  const attrString = ['M', startX, startY, 'A', radius, radius, 0, largeArc, 1, endX, endY].join(
    ' '
  );

  return String(attrString);
};

export const Format = (settings, val): string => {
  const format = settings.format;
  let display;
  switch (format) {
    case 'percentage':
      display = `${val}%`;
      break;
    case 'fraction':
      display = `${settings.value} / ${settings.ceiling}`;
      break;
    default:
      display = `${val}%`;
  }

  return display;
};

export const CalculatePercentage = (settings): number => {
  const value = settings.value || 0;
  const ceiling = settings.ceiling || 100;
  return (value / ceiling) * 100;
};

export const StepDuration = (percentage, duration): number => {
  return duration / percentage;
};

export const GenerateStyles = (settings: DoughnutSettings) => {
  const sharedStyles: PathStyle = {
    fill: 'none',
    strokeWidth: `${settings.thickness}px` || DefaultStyles.sharedStyles.strokeWidth
  };

  const overides = {
    svgStyle: {
      width: `${settings.size}px` || DefaultStyles.svgStyle.width,
      height: `${settings.size}px` || DefaultStyles.svgStyle.height
    },
    circleStyle: {
      ...sharedStyles,
      ...{
        stroke: settings.ringColour || DefaultStyles.circleStyle.stroke
      }
    },
    pathStyle: {
      ...sharedStyles,
      ...{
        stroke: settings.primaryColour || DefaultStyles.pathStyle.stroke
      }
    },
    percentageTextStyle: {
      fontFamily: settings.percentageFontFamily || DefaultStyles.percentageTextStyle.fontFamily,
      fontWeight: settings.percentageFontWeight || DefaultStyles.percentageTextStyle.fontWeight,
      fontSize: `${settings.percentageFontSize}px` || DefaultStyles.percentageTextStyle.fontSize,
      color: settings.primaryColour || DefaultStyles.percentageTextStyle.color,
      margin: '0'
    },
    labelTextStyle: {
      fontFamily: settings.labelFontFamily || DefaultStyles.labelTextStyle.fontFamily,
      fontWeight: settings.labelFontWeight || DefaultStyles.labelTextStyle.fontWeight,
      fontSize: `${settings.labelFontSize}px` || DefaultStyles.labelTextStyle.fontSize,
      color: settings.labelColour || DefaultStyles.labelTextStyle.color,
      margin: '0'
    }
  };
  return { ...DefaultStyles, ...overides };
};
