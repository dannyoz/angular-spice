import { DoughnutSettings, DoughnutFormat, Styles } from './doughnut.interface';
import {
  Format,
  CalculatePathShape,
  StepDuration,
  CalculatePercentage,
  GenerateStyles
} from './doughnut.utils';

describe('Doughnut utils', () => {
  it('Should format percentages correctly', () => {
    let settings: DoughnutSettings;
    settings = {
      value: 100
    };

    expect(Format(settings, settings.value)).toBe('100%');

    settings = {
      value: 98.1,
      percentageDecimals: 2
    };

    expect(Format(settings, settings.value)).toBe('98.10%');
  });

  it('Should format fractions correctly', () => {
    let settings: DoughnutSettings;
    settings = {
      value: 100,
      format: DoughnutFormat.Fraction,
      ceiling: 200
    };

    expect(Format(settings, settings.value)).toBe('100 / 200');

    settings = {
      value: 3,
      format: DoughnutFormat.Fraction,
      ceiling: 5
    };

    expect(Format(settings, settings.value)).toBe('3 / 5');
  });

  it('Should calculate path shapes correctly', () => {
    expect(CalculatePathShape(50, 150, 5)).toBe(
      'M 75 5 A 70 70 0 0 1 75.00012217304764 144.99999999989336'
    );

    expect(CalculatePathShape(75, 150, 10)).toBe(
      'M 75 10 A 65 65 0 1 1 10.000000000099007 75.00011344640137'
    );

    expect(CalculatePathShape(100, 150, 3)).toBe(
      'M 75 3 A 72 72 0 1 1 74.99987433629386 3.000000000109665'
    );
  });

  it('Should calculate step durations correctly', () => {
    expect(StepDuration(50, 1000)).toBe(20);
    expect(StepDuration(100, 1000)).toBe(10);
    expect(StepDuration(10, 1000)).toBe(100);
  });

  it('Should calculate percentage values correctly', () => {
    let settings: DoughnutSettings;
    settings = {
      value: 100,
      ceiling: 200
    };

    expect(CalculatePercentage(settings)).toBe(50);

    settings = {
      value: 30,
      ceiling: 240
    };

    expect(CalculatePercentage(settings)).toBe(12.5);
  });

  it('Should override default styles correctly', () => {
    const overides: DoughnutSettings = {
      value: 100,
      size: 180,
      thickness: 10,
      percentageFontSize: 20,
      labelFontSize: 10
    };

    const expected: Styles = {
      svgStyle: {
        width: '180px',
        height: '180px'
      },
      sharedStyles: {
        fill: 'none',
        strokeWidth: '5px'
      },
      circleStyle: {
        stroke: '#DDDDDD',
        fill: 'none',
        strokeWidth: '10px'
      },
      pathStyle: {
        stroke: '#e7534f',
        fill: 'none',
        strokeWidth: '10px'
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
        fontSize: '20px',
        color: '#e7534f',
        margin: '0'
      },
      labelTextStyle: {
        fontFamily: 'inherit',
        fontWeight: 'normal',
        fontSize: '10px',
        color: '#e7534f',
        margin: '0'
      }
    };

    expect(GenerateStyles(overides)).toEqual(expected);
  });
});
