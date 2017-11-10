import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderedtableComponent } from './borderedtable.component';

describe('BorderedtableComponent', () => {
  let component: BorderedtableComponent;
  let fixture: ComponentFixture<BorderedtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorderedtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderedtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
