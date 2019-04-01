import { Component, DebugElement, Inject, InjectionToken, Type } from '@angular/core';
import { ComponentFixture, TestBed, TestModuleMetadata } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

const TEST_DATA = new InjectionToken<any>('test.data');

@Component({
  selector: 'lg-wrapper',
  template: '',
  providers: [{ provide: TEST_DATA, useValue: null }]
})
export class WrapperComponent {
  constructor(@Inject(TEST_DATA) public data: any) {}
}

export class WrapperFixture {
  public debugElement: DebugElement;
  constructor(public fixture: ComponentFixture<WrapperComponent>) {
    this.debugElement = this.fixture.debugElement;
  }

  component<T>(clazz: Type<T>): T {
    const c = this.fixture.debugElement.query(By.directive(clazz));
    return c && (c.componentInstance as T);
  }
  components<T>(clazz: Type<T>): T[] {
    return this.fixture.debugElement
      .queryAll(By.directive(clazz))
      .map(de => de.componentInstance as T);
  }
  directive<T>(clazz: Type<T>): T {
    const c = this.fixture.debugElement.query(By.directive(clazz));
    return c && (c.injector.get(clazz) as T);
  }
  directives<T>(clazz: Type<T>): T[] {
    return this.fixture.debugElement
      .queryAll(By.directive(clazz))
      .map(de => de.injector.get(clazz) as T);
  }
  service<T>(clazz: Type<T>): T {
    return TestBed.get(clazz) as T;
  }
  detectChanges() {
    this.fixture.detectChanges();
  }
  click(css: string): number {
    const result = this.elements(css);
    result && result.forEach(de => de.triggerEventHandler('click', {}));
    return result.length;
  }

  elements(css: string): DebugElement[] {
    return this.fixture.debugElement.queryAll(By.css(css));
  }

  element(css: string): DebugElement {
    return this.fixture.debugElement.query(By.css(css));
  }

  nativeElements(css: string): HTMLElement[] {
    const elements = this.elements(css);
    return elements && elements.map(e => e.nativeElement);
  }

  nativeElement(css?: string): HTMLElement {
    if (css) {
      const e = this.element(css);
      return e && e.nativeElement;
    }
    return this.debugElement.nativeElement;
  }

  elementsInnerText(css: string): string[] {
    const e = this.elements(css);
    return e && e.map(a => a.nativeElement.innerText);
  }

  elementInnerText(css: string): string {
    const e = this.element(css);
    return e && e.nativeElement.innerText;
  }
}

export function configureTestingModule(moduleDef: TestModuleMetadata): typeof TestBed {
  moduleDef.declarations = [...(moduleDef.declarations || []), WrapperComponent];
  return TestBed.configureTestingModule(moduleDef);
}

export function createWrapper(
  template: string,
  data?: any,
  beforeCreate?: () => void
): WrapperFixture {
  TestBed.overrideComponent(WrapperComponent, {
    set: {
      template: template,
      providers: [{ provide: TEST_DATA, useFactory: () => data }]
    }
  });
  beforeCreate && beforeCreate();
  const fixture = TestBed.createComponent(WrapperComponent);
  fixture.detectChanges();
  return new WrapperFixture(fixture);
}
