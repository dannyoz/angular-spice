import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormControlName } from '@angular/forms';
import { DebugElement } from '@angular/core';

export function getFormMappedFieldsValue(debugElement: DebugElement): any {
  const value = debugElement
    .queryAll(By.directive(FormControlName))
    .map(de => de.injector.get(FormControlName))
    .reduce((obj, directive) => {
      obj[directive.name] = directive.control.value;
      return obj;
    }, {});
  return value;
}
