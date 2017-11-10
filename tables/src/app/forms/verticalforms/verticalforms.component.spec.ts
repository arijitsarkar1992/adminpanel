import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalformsComponent } from './verticalforms.component';

describe('VerticalformsComponent', () => {
  let component: VerticalformsComponent;
  let fixture: ComponentFixture<VerticalformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
