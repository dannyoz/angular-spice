import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DoughnutComponent } from './doughnut.component';
import { By } from '@angular/platform-browser';
import { WrapperComponent, WrapperFixture, createWrapper } from '../testing';
import {
  DoughnutSettings,
  Position,
  DoughnutFormat,
  DefaultStyles,
  StrokeStyle,
  SvgStyle,
  FontStyles
} from './doughnut.interface';

describe('DoughnutComponent', () => {
  let component: DoughnutComponent;
  let wrapper: WrapperFixture;
  let fixture: ComponentFixture<WrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DoughnutComponent, WrapperComponent]
    });
  }));

  describe('Doughnut display', () => {
    it('should display the correct value', () => {
      const data: DoughnutSettings = {
        value: 67
      };

      wrapper = createWrapper('<spice-doughnut [settings]="data"></spice-doughnut>', data);
      fixture = wrapper.fixture;

      const displayELe = fixture.debugElement.query(By.css('[data-test=display]'));

      expect(displayELe.nativeElement).toBeTruthy();
      expect(displayELe.nativeElement.innerText).toBe('67%');
    });

    it('should display top labels correctly', () => {
      const data: DoughnutSettings = {
        value: 100,
        labelPosition: Position.Top,
        labelText: 'Test label'
      };

      wrapper = createWrapper('<spice-doughnut [settings]="data"></spice-doughnut>', data);
      fixture = wrapper.fixture;

      const labelTopEle = fixture.debugElement.query(By.css('[data-test=label-top]'));

      expect(labelTopEle.nativeElement).toBeTruthy();
      expect(labelTopEle.nativeElement.innerText).toBe('Test label');
    });

    it('should display bottom labels correctly', () => {
      const data: DoughnutSettings = {
        value: 100,
        labelText: 'Test label'
      };

      wrapper = createWrapper('<spice-doughnut [settings]="data"></spice-doughnut>', data);
      fixture = wrapper.fixture;

      const labelBottomEle = fixture.debugElement.query(By.css('[data-test=label-bottom]'));

      expect(labelBottomEle.nativeElement).toBeTruthy();
      expect(labelBottomEle.nativeElement.innerText).toBe('Test label');
    });
  });

  describe('Doughnut configuration', () => {
    it('Should set default component settings correctly', () => {
      const data: DoughnutSettings = {
        value: 30
      };

      const expected: DoughnutSettings = {
        value: 30,
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

      wrapper = createWrapper('<spice-doughnut [settings]="data"></spice-doughnut>', data);
      fixture = wrapper.fixture;
      component = wrapper.component(DoughnutComponent);

      component.configure();

      expect(component.computedSettings).toEqual(expected);
    });

    it('Should overide default component settings correctly', () => {
      const data: DoughnutSettings = {
        value: 30,
        size: 180,
        labelText: 'Awesome',
        labelPosition: Position.Top
      };

      const expected: DoughnutSettings = {
        value: 30,
        size: 180,
        thickness: 5,
        primaryColour: '#e7534f',
        ringColour: '#DDDDDD',
        percentageFontSize: 28,
        percentageFontWeight: 'bold',
        ceiling: 100,
        format: DoughnutFormat.Percentage,
        labelPosition: Position.Top,
        labelText: 'Awesome',
        labelFontSize: 14,
        percentageDecimals: 0
      };

      wrapper = createWrapper('<spice-doughnut [settings]="data"></spice-doughnut>', data);
      fixture = wrapper.fixture;
      component = wrapper.component(DoughnutComponent);

      component.configure();

      expect(component.computedSettings).toEqual(expected);
    });

    it('Should set default doughnut styles', () => {
      const data: DoughnutSettings = {
        value: 100
      };

      wrapper = createWrapper('<spice-doughnut [settings]="data"></spice-doughnut>', data);
      fixture = wrapper.fixture;
      component = wrapper.component(DoughnutComponent);

      component.configure();

      expect(component.svgStyle).toEqual(DefaultStyles.svgStyle);
      expect(component.circleStyle).toEqual(DefaultStyles.circleStyle);
      expect(component.pathStyle).toEqual(DefaultStyles.pathStyle);
      expect(component.textWrapperStyle).toEqual(DefaultStyles.textWrapperStyle);
      expect(component.labelTextStyle).toEqual(DefaultStyles.labelTextStyle);
      expect(component.percentageTextStyle).toEqual(DefaultStyles.percentageTextStyle);
    });

    it('Should overide default svgStyles correctly', () => {
      const data: DoughnutSettings = {
        value: 100,
        size: 180
      };

      wrapper = createWrapper('<spice-doughnut [settings]="data"></spice-doughnut>', data);
      fixture = wrapper.fixture;
      component = wrapper.component(DoughnutComponent);

      component.configure();
      expect(component.svgStyle).toEqual({
        width: '180px',
        height: '180px'
      });
    });

    it('Should overide default svgStyles correctly', () => {
      const data: DoughnutSettings = {
        value: 100,
        size: 180
      };

      const expected: SvgStyle = {
        width: '180px',
        height: '180px'
      };

      wrapper = createWrapper('<spice-doughnut [settings]="data"></spice-doughnut>', data);
      fixture = wrapper.fixture;
      component = wrapper.component(DoughnutComponent);

      component.configure();
      expect(component.svgStyle).toEqual(expected);
    });

    it('Should overide default circleStyle correctly', () => {
      const data: DoughnutSettings = {
        value: 100,
        ringColour: 'red'
      };

      const expected: StrokeStyle = {
        fill: 'none',
        strokeWidth: '5px',
        stroke: 'red'
      };

      wrapper = createWrapper('<spice-doughnut [settings]="data"></spice-doughnut>', data);
      fixture = wrapper.fixture;
      component = wrapper.component(DoughnutComponent);

      component.configure();
      expect(component.circleStyle).toEqual(expected);
    });

    it('Should overide default pathStyle correctly', () => {
      const data: DoughnutSettings = {
        value: 100,
        primaryColour: 'red'
      };

      const expected: StrokeStyle = {
        fill: 'none',
        strokeWidth: '5px',
        stroke: 'red'
      };

      wrapper = createWrapper('<spice-doughnut [settings]="data"></spice-doughnut>', data);
      fixture = wrapper.fixture;
      component = wrapper.component(DoughnutComponent);

      component.configure();
      expect(component.pathStyle).toEqual(expected);
    });

    it('Should overide default percentageTextStyle correctly', () => {
      const data: DoughnutSettings = {
        value: 100,
        percentageFontFamily: 'arial, sans-serif',
        percentageFontSize: 20,
        primaryColour: 'red',
        percentageFontWeight: 'normal'
      };

      const expected: FontStyles = {
        fontFamily: 'arial, sans-serif',
        fontWeight: 'normal',
        fontSize: '20px',
        color: 'red',
        margin: '0'
      };

      wrapper = createWrapper('<spice-doughnut [settings]="data"></spice-doughnut>', data);
      fixture = wrapper.fixture;
      component = wrapper.component(DoughnutComponent);

      component.configure();
      expect(component.percentageTextStyle).toEqual(expected);
    });

    it('Should overide default labelTextStyle correctly', () => {
      const data: DoughnutSettings = {
        value: 100,
        labelFontFamily: 'arial, sans-serif',
        labelFontSize: 20,
        labelColour: 'red',
        labelFontWeight: 'bold'
      };

      const expected: FontStyles = {
        fontFamily: 'arial, sans-serif',
        fontWeight: 'bold',
        fontSize: '20px',
        color: 'red',
        margin: '0'
      };

      wrapper = createWrapper('<spice-doughnut [settings]="data"></spice-doughnut>', data);
      fixture = wrapper.fixture;
      component = wrapper.component(DoughnutComponent);

      component.configure();
      expect(component.labelTextStyle).toEqual(expected);
    });
  });

  describe('Doughnut formatting', () => {
    it('Should format path d attributes correctly', () => {
      const data: DoughnutSettings = {
        value: 100
      };

      wrapper = createWrapper('<spice-doughnut [settings]="data"></spice-doughnut>', data);
      fixture = wrapper.fixture;
      component = wrapper.component(DoughnutComponent);

      component.ngOnInit();
      expect(component.dAttr).toEqual('M 75 5 A 70 70 0 1 1 74.99987782695236 5.000000000106624');
    });

    it('Should format percentages correctly', () => {
      const data: DoughnutSettings = {
        value: 75
      };

      wrapper = createWrapper('<spice-doughnut [settings]="data"></spice-doughnut>', data);
      fixture = wrapper.fixture;
      component = wrapper.component(DoughnutComponent);

      component.ngOnInit();
      expect(component.display).toEqual('75%');
    });

    it('Should format fractions correctly', () => {
      const data: DoughnutSettings = {
        value: 10,
        format: DoughnutFormat.Fraction,
        ceiling: 20
      };

      wrapper = createWrapper('<spice-doughnut [settings]="data"></spice-doughnut>', data);
      fixture = wrapper.fixture;
      component = wrapper.component(DoughnutComponent);

      component.ngOnInit();
      expect(component.display).toEqual('10 / 20');
    });
  });
});
