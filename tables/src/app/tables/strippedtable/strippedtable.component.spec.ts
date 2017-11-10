import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrippedtableComponent } from './strippedtable.component';

describe('StrippedtableComponent', () => {
  let component: StrippedtableComponent;
  let fixture: ComponentFixture<StrippedtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrippedtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrippedtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
